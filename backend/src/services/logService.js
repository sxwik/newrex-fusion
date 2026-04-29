import { Log } from '../models/Log.js';

export async function writeLog({ userId, type, message, meta }) {
  await Log.create({ userId, type, message, meta });
}
