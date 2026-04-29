# Newrex Fusion Backend

Production-ready Fastify backend scaffold with:
- JWT auth (signup/login/logout)
- API keys per user
- Chat history in MongoDB Atlas
- AI provider router with fallback (Gemini -> Groq -> HuggingFace)
- WebSocket token streaming
- Per-user rate limiting
- Admin dashboard APIs
- Structured logging and suspicious activity log support

## 1) Install dependencies
```bash
cd backend
npm install
```

## 2) Setup `.env`
```bash
cp .env.example .env
```

Fill at minimum:
- `MONGODB_URI` (MongoDB Atlas URI)
- `JWT_SECRET` (32+ chars)
- `GEMINI_API_KEY`
- `GROQ_API_KEY`
- `HUGGINGFACE_API_KEY`

(At least one provider key is required to boot; for production, set all three.)

## 3) Run backend
```bash
npm run dev
# or
npm start
```

Default port is `5000`.

## 4) Connect frontend

REST example:
```js
fetch('http://localhost:5000/api/chat/message', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  body: JSON.stringify({ prompt: 'Hello' })
});
```

WebSocket example:
```js
const ws = new WebSocket(`ws://localhost:5000/api/chat/stream?token=${token}`);
ws.send(JSON.stringify({ prompt: 'Hello stream' }));
```

## Admin role management

Admin roles are DB-managed. To promote a user:
```bash
ADMIN_EMAIL=admin@newrexfusion.com npm run seed:admin
```

## Deploy
Compatible with Render / Railway / Vercel (Node server mode).
