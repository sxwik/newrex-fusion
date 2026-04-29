export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { prompt } = req.body || {};
    if (!prompt || typeof prompt !== 'string') return res.status(400).json({ error: 'Invalid prompt' });
    if (!process.env.GEMINI_API_KEY) return res.status(500).json({ error: 'Server misconfigured' });

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: prompt }] }] })
    });

    if (!response.ok) return res.status(502).json({ error: 'Upstream AI failed' });

    const data = await response.json();
    const content = data?.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('').trim();
    return res.status(200).json({ content: content || 'Something went wrong.' });
  } catch {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
