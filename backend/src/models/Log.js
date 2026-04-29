import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['error', 'request', 'suspicious'], required: true },
  message: { type: String, required: true },
  meta: { type: Object }
}, { timestamps: true });

export const Log = mongoose.model('Log', logSchema);
