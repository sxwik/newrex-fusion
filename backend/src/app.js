import Fastify from 'fastify';
import { loggerConfig } from './config/logger.js';
import corePlugins from './plugins/core.js';
import authRoutes from './routes/auth/index.js';
import chatRoutes from './routes/chat/index.js';
import adminRoutes from './routes/admin/index.js';
import healthRoutes from './routes/health/index.js';
import { connectMongo } from './db/mongoose.js';

export async function buildApp() {
  const app = Fastify({ logger: loggerConfig });

  await app.register(corePlugins);
  await connectMongo(app);

  app.addHook('onResponse', async (request, reply) => {
    app.log.info({ method: request.method, url: request.url, statusCode: reply.statusCode }, 'request log');
  });

  app.register(healthRoutes, { prefix: '/api' });
  app.register(authRoutes, { prefix: '/api/auth' });
  app.register(chatRoutes, { prefix: '/api/chat' });
  app.register(adminRoutes, { prefix: '/api/admin' });

  return app;
}
