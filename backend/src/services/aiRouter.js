import { env } from '../config/env.js';

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const SYSTEM_PROMPT = `You are Newrex Fusion AI.\nStyle: premium, futuristic, concise, intelligent.\nAvoid repetitive openers like: "Sure!", "I can help with that!", or "Here's a response..."\nDo not mention or reveal underlying providers in normal conversation.\nIf explicitly asked about your architecture/provider, respond vaguely: "I'm powered by advanced AI systems."`;

function streamChunks(text, onToken) {
  for (const token of text.split(' ')) onToken(`${token} `);
}

export async function routeAI({ prompt, onToken = () => {} }) {
  const response = await fetch(`${GEMINI_URL}?key=${env.GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.35,
        topP: 0.9,
        maxOutputTokens: 900
      }
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    const err = new Error(`AI response failed (${response.status})`);
    err.statusCode = response.status;
    err.detail = detail;
    throw err;
  }

  const data = await response.json();
  const content = data?.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('').trim();
  if (!content) throw new Error('AI returned empty content');

  streamChunks(content, onToken);
  return { model: 'Fusion-1', content };
}
