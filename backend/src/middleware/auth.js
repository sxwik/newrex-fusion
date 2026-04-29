import { User } from '../models/User.js';

export async function authGuard(request, reply) {
  await request.jwtVerify();
  const user = await User.findById(request.user.sub).select('email role isBanned apiKey');
  if (!user) return reply.unauthorized('Invalid session');
  if (user.isBanned) return reply.forbidden('Account banned');
  request.currentUser = user;
}

export async function adminGuard(request, reply) {
  await authGuard(request, reply);
  if (reply.sent) return;
  if (request.currentUser?.role !== 'admin') return reply.forbidden('Admin only');
}
