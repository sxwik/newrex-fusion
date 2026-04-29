import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(5000),
  MONGODB_URI: z.string().min(1),
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default('7d'),
  REDIS_URL: z.string().optional(),
  GEMINI_API_KEY: z.string().optional(),
  GROQ_API_KEY: z.string().optional(),
  HUGGINGFACE_API_KEY: z.string().optional(),
  STABILITY_API_KEY: z.string().optional(),
  RATE_LIMIT_MAX: z.coerce.number().default(120),
  RATE_LIMIT_WINDOW: z.string().default('1 minute'),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),
  ADMIN_EMAIL: z.string().email().optional()
}).superRefine((val, ctx) => {
  if (!val.GEMINI_API_KEY && !val.GROQ_API_KEY && !val.HUGGINGFACE_API_KEY) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'At least one model provider key is required (Gemini, Groq, or HuggingFace).'
    });
  }
});

export const env = envSchema.parse(process.env);
