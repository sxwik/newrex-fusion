import { adminGuard } from '../../middleware/auth.js';
import { User } from '../../models/User.js';
import { Log } from '../../models/Log.js';
import { generateApiKey } from '../../utils/security.js';

export default async function adminRoutes(fastify) {
  fastify.addHook('preHandler', adminGuard);

  fastify.get('/users', async () => User.find().select('-passwordHash').limit(200));
  fastify.post('/users/:id/ban', async (request) => User.findByIdAndUpdate(request.params.id, { isBanned: true }, { new: true }));
  fastify.post('/users/:id/reset-api-key', async (request) => User.findByIdAndUpdate(request.params.id, { apiKey: generateApiKey() }, { new: true }));
  fastify.get('/logs', async () => Log.find().sort({ createdAt: -1 }).limit(500));
}
