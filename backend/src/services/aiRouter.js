import { env } from '../config/env.js';

function createProviderError(message, statusCode) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

function shouldFallback(error) {
  const code = error?.statusCode;
  if (!code) return true;
  return [429, 500, 502, 503, 504].includes(code);
}

async function fakeStream(text, onToken) {
  for (const token of text.split(' ')) {
    await new Promise((r) => setTimeout(r, 10));
    onToken(`${token} `);
  }
}

async function callGemini(prompt, onToken) {
  if (!env.GEMINI_API_KEY) throw createProviderError('Gemini unavailable', 503);
  await fakeStream(`[Gemini] ${prompt}`, onToken);
  return { model: 'gemini', content: `[Gemini] ${prompt}` };
}

async function callGroq(prompt, onToken) {
  if (!env.GROQ_API_KEY) throw createProviderError('Groq unavailable', 503);
  await fakeStream(`[Groq] ${prompt}`, onToken);
  return { model: 'groq', content: `[Groq] ${prompt}` };
}

async function callHuggingFace(prompt, onToken) {
  if (!env.HUGGINGFACE_API_KEY) throw createProviderError('HuggingFace unavailable', 503);
  await fakeStream(`[HF] ${prompt}`, onToken);
  return { model: 'huggingface', content: `[HF] ${prompt}` };
}

export async function routeAI({ prompt, onToken }) {
  try {
    return await callGemini(prompt, onToken);
  } catch (err) {
    if (!shouldFallback(err)) throw err;
  }

  try {
    return await callGroq(prompt, onToken);
  } catch (err) {
    if (!shouldFallback(err)) throw err;
  }

  return callHuggingFace(prompt, onToken);
}
