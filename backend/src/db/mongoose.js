import mongoose from 'mongoose';
import { env } from '../config/env.js';

export async function connectMongo(fastify) {
  await mongoose.connect(env.MONGODB_URI, { dbName: 'newrex-fusion' });
  fastify.log.info('MongoDB connected');
}
