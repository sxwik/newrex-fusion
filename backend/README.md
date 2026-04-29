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

## Deploy
Compatible with Render / Railway / Vercel (Node server mode).

## Run
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
