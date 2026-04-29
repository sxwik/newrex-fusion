import { authGuard } from '../../middleware/auth.js';
import { Chat } from '../../models/Chat.js';
import { routeAI } from '../../services/aiRouter.js';

export default async function chatRoutes(fastify) {
  fastify.addHook('preHandler', authGuard);

  fastify.get('/history', async (request) => Chat.find({ userId: request.user.sub }).sort({ updatedAt: -1 }).limit(50));

  fastify.post('/message', async (request) => {
    const { chatId, prompt } = request.body;
    const response = await routeAI({ prompt, onToken: () => {} });
    const chat = chatId ? await Chat.findById(chatId) : await Chat.create({ userId: request.user.sub, title: prompt.slice(0, 40), messages: [] });
    chat.messages.push({ role: 'user', content: prompt });
    chat.messages.push({ role: 'assistant', content: response.content, model: response.model });
    await chat.save();
    return { chatId: chat.id, ...response };
  });

  fastify.get('/stream', { websocket: true }, (socket, request) => {
    socket.on('message', async (raw) => {
      const { prompt } = JSON.parse(String(raw));
      const result = await routeAI({
        prompt,
        onToken: (token) => socket.send(JSON.stringify({ type: 'token', token }))
      });
      socket.send(JSON.stringify({ type: 'done', model: result.model }));
    });
  });
}
