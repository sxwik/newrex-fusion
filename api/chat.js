export default async function handler(req, res) {
  try {
    const { prompt } = req.body || {};

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [
          {
            role: 'system',
            content: 'You are Newrex Fusion AI, a witty, playful, smart, and slightly sarcastic assistant. You talk like a cool internet-savvy friend, not like ChatGPT. Keep answers concise unless asked for detail. Use humor and confidence. Avoid robotic phrases. For coding questions, switch to concise technical mode.'
          },
          { role: 'user', content: prompt }
        ]
      })
    });

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || 'API Error'
      });
    }

    const text = data?.choices?.[0]?.message?.content || 'No response';
    return res.status(200).json({ content: text });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
}
