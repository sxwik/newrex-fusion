export async function authGuard(request, reply) {
  await request.jwtVerify();
  if (request.user?.isBanned) {
    return reply.forbidden('Account banned');
  }
}

export async function adminGuard(request, reply) {
  await request.jwtVerify();
  if (request.user?.role !== 'admin') return reply.forbidden('Admin only');
}
