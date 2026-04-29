import mongoose from 'mongoose';
import { env } from '../src/config/env.js';
import { User } from '../src/models/User.js';

if (!env.ADMIN_EMAIL) throw new Error('ADMIN_EMAIL is required for seed-admin');

await mongoose.connect(env.MONGODB_URI, { dbName: 'newrex-fusion' });
const user = await User.findOneAndUpdate({ email: env.ADMIN_EMAIL }, { role: 'admin' }, { new: true });
console.log(user ? `Admin granted: ${user.email}` : `No user found for ${env.ADMIN_EMAIL}`);
await mongoose.disconnect();
