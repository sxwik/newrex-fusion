async function request(path, options = {}) {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  if (!res.ok) throw new Error('Request failed');
  return res.json();
}

export const api = {
  health: () => request('/api/health'),
  chat: (prompt) => request('/api/chat', { method: 'POST', body: JSON.stringify({ prompt }) })
};
