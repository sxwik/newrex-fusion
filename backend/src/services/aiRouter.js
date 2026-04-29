import { env } from '../config/env.js';

async function fakeStream(text, onToken) {
  for (const token of text.split(' ')) {
    await new Promise((r) => setTimeout(r, 10));
    onToken(`${token} `);
  }
}

async function callGemini(prompt, onToken) {
  if (!env.GEMINI_API_KEY) throw new Error('Gemini unavailable');
  await fakeStream(`[Gemini] ${prompt}`, onToken);
  return { model: 'gemini', content: `[Gemini] ${prompt}` };
}

async function callGroq(prompt, onToken) {
  if (!env.GROQ_API_KEY) throw new Error('Groq unavailable');
  await fakeStream(`[Groq] ${prompt}`, onToken);
  return { model: 'groq', content: `[Groq] ${prompt}` };
}

async function callHuggingFace(prompt, onToken) {
  if (!env.HUGGINGFACE_API_KEY) throw new Error('HF unavailable');
  await fakeStream(`[HF] ${prompt}`, onToken);
  return { model: 'huggingface', content: `[HF] ${prompt}` };
}

export async function routeAI({ prompt, onToken }) {
  try {
    return await callGemini(prompt, onToken);
  } catch {
    try {
      return await callGroq(prompt, onToken);
    } catch {
      return callHuggingFace(prompt, onToken);
    }
  }
}
