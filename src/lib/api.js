const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  if (!res.ok) throw new Error((await res.text()) || 'Request failed');
  return res.json();
}

export const api = {
  signup: (payload) => request('/api/auth/signup', { method: 'POST', body: JSON.stringify(payload) }),
  login: (payload) => request('/api/auth/login', { method: 'POST', body: JSON.stringify(payload) }),
  history: (token) => request('/api/chat/history', { headers: { Authorization: `Bearer ${token}` } }),
  message: (token, payload) => request('/api/chat/message', { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: JSON.stringify(payload) }),
  wsUrl: (token) => `${API_BASE.replace('http', 'ws')}/api/chat/stream?token=${encodeURIComponent(token)}`
};
