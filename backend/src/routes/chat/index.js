import { authGuard } from '../../middleware/auth.js';
import { Chat } from '../../models/Chat.js';
import { Message } from '../../models/Message.js';
import { routeAI } from '../../services/aiRouter.js';

export default async function chatRoutes(fastify) {
  fastify.addHook('preHandler', authGuard);

  fastify.get('/history', async (request) => Chat.find({ userId: request.currentUser.id }).sort({ updatedAt: -1 }).limit(50));

  fastify.post('/message', {
    schema: {
      body: {
        type: 'object',
        additionalProperties: false,
        properties: {
          chatId: { type: 'string' },
          prompt: { type: 'string', minLength: 1, maxLength: 12000 }
        },
        required: ['prompt']
      }
    }
  }, async (request) => {
    const { chatId, prompt } = request.body;
    const response = await routeAI({ prompt, onToken: () => {} });
    const chat = chatId ? await Chat.findById(chatId) : await Chat.create({ userId: request.currentUser.id, title: prompt.slice(0, 40), messages: [] });

    const newMessages = [
      { role: 'user', content: prompt, createdAt: new Date() },
      { role: 'assistant', content: response.content, model: response.model, createdAt: new Date() }
    ];
    chat.messages.push(...newMessages);

    if (chat.messages.length > 50) {
      const overflow = chat.messages.splice(0, chat.messages.length - 50);
      await Message.insertMany(overflow.map((m) => ({ ...m, chatId: chat.id, userId: request.currentUser.id })));
    }

    await chat.save();
    return { chatId: chat.id, ...response };
  });

  fastify.get('/stream', { websocket: true }, (socket, request) => {
    const token = request.query?.token;
    if (!token) {
      socket.close(1008, 'Missing token');
      return;
    }

    let currentUser;
    fastify.jwt.verify(token)
      .then((payload) => {
        currentUser = payload;
      })
      .catch(() => socket.close(1008, 'Invalid token'));

    socket.on('message', async (raw) => {
      if (!currentUser) return;
      const { prompt } = JSON.parse(String(raw));
      const result = await routeAI({
        prompt,
        onToken: (tokenPart) => socket.send(JSON.stringify({ type: 'token', token: tokenPart }))
      });
      socket.send(JSON.stringify({ type: 'done', model: result.model, userId: currentUser.sub }));
    });
  });
}
