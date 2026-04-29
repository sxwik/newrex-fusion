import fp from 'fastify-plugin';
import cors from '@fastify/cors';
import sensible from '@fastify/sensible';
import jwt from '@fastify/jwt';
import rateLimit from '@fastify/rate-limit';
import websocket from '@fastify/websocket';
import redis from '@fastify/redis';
import { env } from '../config/env.js';

export default fp(async function corePlugins(fastify) {
  await fastify.register(cors, { origin: env.CORS_ORIGIN === '*' ? true : env.CORS_ORIGIN, credentials: true });
  await fastify.register(sensible);
  await fastify.register(jwt, { secret: env.JWT_SECRET });
  await fastify.register(rateLimit, {
    max: env.RATE_LIMIT_MAX,
    timeWindow: env.RATE_LIMIT_WINDOW,
    keyGenerator: (request) => request.user?.sub ?? request.ip
  });
  if (env.REDIS_URL) await fastify.register(redis, { url: env.REDIS_URL, closeClient: true });
  await fastify.register(websocket);
});
