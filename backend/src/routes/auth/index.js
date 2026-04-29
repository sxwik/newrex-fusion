import bcrypt from 'bcryptjs';
import { User } from '../../models/User.js';
import { generateApiKey } from '../../utils/security.js';

const authBodySchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 8, maxLength: 128 }
  },
  required: ['email', 'password']
};

export default async function authRoutes(fastify) {
  fastify.post('/signup', {
    schema: {
      body: {
        ...authBodySchema,
        properties: { ...authBodySchema.properties, name: { type: 'string', minLength: 1, maxLength: 80 } },
        required: ['name', 'email', 'password']
      }
    }
  }, async (request, reply) => {
    const { name, email, password } = request.body;
    const existing = await User.findOne({ email });
    if (existing) return reply.conflict('Email already exists');
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, passwordHash, apiKey: generateApiKey(), role: 'user' });
    const token = fastify.jwt.sign({ sub: user.id, role: user.role });
    return { token, user: { id: user.id, email: user.email, role: user.role, apiKey: user.apiKey } };
  });

  fastify.post('/login', { schema: { body: authBodySchema } }, async (request, reply) => {
    const { email, password } = request.body;
    const user = await User.findOne({ email }).select('+passwordHash');
    if (!user || !(await user.comparePassword(password))) return reply.unauthorized('Invalid credentials');
    if (user.isBanned) return reply.forbidden('Account banned');
    const token = fastify.jwt.sign({ sub: user.id, role: user.role });
    return { token, user: { id: user.id, email: user.email, role: user.role, apiKey: user.apiKey } };
  });

  fastify.post('/logout', async () => ({ ok: true }));
}
