import bcrypt from 'bcryptjs';
import { User } from '../../models/User.js';
import { generateApiKey } from '../../utils/security.js';

export default async function authRoutes(fastify) {
  fastify.post('/signup', async (request, reply) => {
    const { name, email, password } = request.body;
    const existing = await User.findOne({ email });
    if (existing) return reply.conflict('Email already exists');
    const passwordHash = await bcrypt.hash(password, 12);
    const role = email === process.env.ADMIN_EMAIL ? 'admin' : 'user';
    const user = await User.create({ name, email, passwordHash, apiKey: generateApiKey(), role });
    const token = fastify.jwt.sign({ sub: user.id, role: user.role, isBanned: user.isBanned });
    return { token, user: { id: user.id, email: user.email, role: user.role, apiKey: user.apiKey } };
  });

  fastify.post('/login', async (request, reply) => {
    const { email, password } = request.body;
    const user = await User.findOne({ email }).select('+passwordHash');
    if (!user || !(await user.comparePassword(password))) return reply.unauthorized('Invalid credentials');
    if (user.isBanned) return reply.forbidden('Account banned');
    const token = fastify.jwt.sign({ sub: user.id, role: user.role, isBanned: user.isBanned });
    return { token, user: { id: user.id, email: user.email, role: user.role, apiKey: user.apiKey } };
  });

  fastify.post('/logout', async () => ({ ok: true }));
}
