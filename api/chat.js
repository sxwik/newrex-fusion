export default async function handler(req, res) {
  try {
    const { prompt } = req.body || {};

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || 'API Error'
      });
    }

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return res.status(200).json({
      content: text || 'No response from model'
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
}
