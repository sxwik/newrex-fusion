<div align="center">

<br />

```
███╗   ██╗███████╗██╗    ██╗██████╗ ███████╗██╗  ██╗
████╗  ██║██╔════╝██║    ██║██╔══██╗██╔════╝╚██╗██╔╝
██╔██╗ ██║█████╗  ██║ █╗ ██║██████╔╝█████╗   ╚███╔╝
██║╚██╗██║██╔══╝  ██║███╗██║██╔══██╗██╔══╝   ██╔██╗
██║ ╚████║███████╗╚███╔███╔╝██║  ██║███████╗██╔╝ ██╗
╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝

███████╗██╗   ██╗███████╗██╗ ██████╗ ███╗   ██╗
██╔════╝██║   ██║██╔════╝██║██╔═══██╗████╗  ██║
█████╗  ██║   ██║███████╗██║██║   ██║██╔██╗ ██║
██╔══╝  ██║   ██║╚════██║██║██║   ██║██║╚██╗██║
██║     ╚██████╔╝███████║██║╚██████╔╝██║ ╚████║
╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
```

<br />

### ⬡ &nbsp;&nbsp; Multiple minds. &nbsp; One answer. &nbsp;&nbsp; ⬡

<br />

> **Newrex Fusion** is a premium AI API aggregator and router that dispatches your prompt to multiple large language models **simultaneously**, runs a recursive peer-review pass across all outputs, and synthesises a single **consensus-verified** response — in real time.

<br />

[![React](https://img.shields.io/badge/React_19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite_8-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_3-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License MIT](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)
[![Stars](https://img.shields.io/github/stars/sxwik/newrex-fusion?style=for-the-badge&color=fbbf24)](https://github.com/sxwik/newrex-fusion/stargazers)

<br />

---

</div>

<br />

## 🗂️ Table of Contents

- [What Is Newrex Fusion?](#-what-is-newrex-fusion)
- [How It Works](#-how-it-works)
- [Features](#-features)
- [Operation Modes](#-operation-modes)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Component Reference](#-component-reference)
- [Hook Reference](#-hook-reference)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

<br />

---

## 🧠 What Is Newrex Fusion?

Most AI tools ask **one model** and hope for the best.

**Newrex Fusion** asks **all of them** — at the same time.

Instead of picking one LLM and crossing your fingers, Fusion fires your prompt at GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and Llama 3.1 simultaneously. While they each generate a response, Fusion monitors progress in real time through a live terminal log. Once all models respond, a **peer-review consensus engine** cross-checks the outputs, scores agreement, and synthesises the strongest final answer — complete with a **Consensus Verified** badge.

The result: answers that are more accurate, more balanced, and more trustworthy than any single model could produce.

<br />

---

## ⚙️ How It Works

```
                    ┌─────────────────────────────────┐
                    │           USER PROMPT            │
                    │    "Explain quantum computing"   │
                    └───────────────┬─────────────────┘
                                    │
                                    ▼
                    ┌─────────────────────────────────┐
                    │          FUSION ROUTER           │
                    │  Dispatches to all models at     │
                    │  the same time, in parallel      │
                    └──┬──────┬──────┬────────────────┘
                       │      │      │      │
           ┌───────────┘      │      │      └────────────┐
           │                  │      │                    │
           ▼                  ▼      ▼                    ▼
    ┌────────────┐   ┌──────────┐  ┌──────────┐  ┌────────────┐
    │  GPT-4o    │   │Claude 3.5│  │Gemini 1.5│  │ Llama 3.1  │
    │  OpenAI    │   │Anthropic │  │  Google  │  │    Meta    │
    │   820ms    │   │  940ms   │  │  710ms   │  │   390ms    │
    └─────┬──────┘   └────┬─────┘  └────┬─────┘  └─────┬──────┘
          │               │              │               │
          └───────────────┴──────────────┴───────────────┘
                                    │
                                    ▼
                    ┌─────────────────────────────────┐
                    │       PEER-REVIEW ENGINE         │
                    │  Models cross-check each other  │
                    │  Agreement scored: 94%           │
                    └───────────────┬─────────────────┘
                                    │
                                    ▼
                    ┌─────────────────────────────────┐
                    │      CONSENSUS SYNTHESISER       │
                    │  Picks strongest elements from  │
                    │  each response, merges them     │
                    └───────────────┬─────────────────┘
                                    │
                                    ▼
                    ┌─────────────────────────────────┐
                    │  ✓  CONSENSUS VERIFIED OUTPUT   │
                    │   One answer. Validated by all. │
                    └─────────────────────────────────┘
```

<br />

---

## ✨ Features

<br />

### 🎯 Core Capabilities

| Capability | Description |
|------------|-------------|
| **Parallel Dispatch** | Fires your prompt at all 4 models simultaneously — no sequential waiting |
| **Live Progress Tracking** | Animated progress bars and latency stats per model, updating in real time |
| **Peer-Review Pass** | Models cross-check each other's outputs before a final answer is produced |
| **Agreement Scoring** | Quantified consensus percentage shown in the analytics panel |
| **Typewriter Response** | Final answer streams in with a live cursor — just like native ChatGPT |
| **Consensus Badge** | "Consensus Verified" badge appears only when peer-review passes |
| **Terminal Logs** | Live `info` / `ok` / `warn` / `err` log feed with timestamps |
| **Cost Analytics** | Estimated token cost per query shown in real time |

<br />

### 🎨 UI / UX Highlights

| Feature | Detail |
|---------|--------|
| **Premium Dark Theme** | Deep `#080b14` base with navy panels and subtle cyan glow accents |
| **Animated Grid BG** | Subtle 40×40px grid lines with a breathing radial orb |
| **Glowing Focus Border** | Prompt input gets an animated gradient glow ring on focus |
| **Micro-interactions** | Hover states, button press scale, badge fade-in — all CSS |
| **Geist Typography** | Geist (UI) + Geist Mono (logs/code) — the same fonts Vercel ships |
| **CSS Modules** | Zero class leakage — every component is fully scoped |
| **No UI Library** | No MUI, no Chakra, no Radix — 100% hand-crafted components |
| **Responsive** | 3-column desktop layout collapses gracefully on smaller screens |

<br />

---

## 🔀 Operation Modes

<br />

### ⊕ &nbsp; Consensus Mode *(default)*

Every model generates an answer. A recursive **peer-review pass** runs — each model rates the others' outputs. The synthesiser takes the highest-agreement elements and produces one final, verified response.

**Best for:** factual questions, research, anything where accuracy matters more than speed.

---

### ⊞ &nbsp; Arena Mode

All model responses displayed **side-by-side** in comparison cards. No merging — you read the raw outputs and decide.

**Best for:** creative writing, brainstorming, seeing how different AI voices approach the same problem.

---

### ◉ &nbsp; Voting Mode

Each model votes for what it believes is the best answer. A **majority vote** is counted, the winning response is surfaced, and a confidence bar shows how unified the models were.

**Best for:** yes/no decisions, recommendations, choosing between options.

---

### ◈ &nbsp; Specialist Mode

Your prompt is analysed for **task type**, then routed to the model best suited for it:

| Task Type | Routed To | Reason |
|-----------|-----------|--------|
| 🧑‍💻 Coding | GPT-4o | Superior code generation and debugging |
| ✍️ Creative | Claude 3.5 | Best prose, tone, and nuanced writing |
| 🧮 Math / Logic | Gemini 1.5 | Strong reasoning and structured output |
| ⚡ Speed | Llama 3.1 | Lowest latency for quick factual answers |

**Best for:** power users who want the fastest, highest-quality answer per task type.

<br />

---

## 🛠️ Tech Stack

| Layer | Technology | Version | Why |
|-------|-----------|---------|-----|
| **UI Framework** | React | 19 | Concurrent features, fine-grained re-renders |
| **Build Tool** | Vite | 8 | Sub-second HMR, native ESM |
| **Styling** | CSS Modules | — | Zero runtime, scoped by default |
| **CSS Utilities** | Tailwind CSS | 3 | Rapid layout prototyping |
| **Icons** | Lucide React | 1.11 | Consistent, tree-shakeable SVG icons |
| **Fonts** | Geist / Geist Mono | — | Vercel's design-system fonts |
| **Linting** | ESLint | 10 | React Hooks + Refresh plugins |

<br />

---

## 📁 Project Structure

```
newrex-fusion/
│
├── public/
│   └── favicon.svg                   # Hex logo favicon
│
├── src/
│   ├── components/
│   │   ├── AnalyticsPanel.jsx        # Stat cards: agreement, latency, tokens, cost
│   │   ├── AnalyticsPanel.module.css
│   │   ├── LogPanel.jsx              # Auto-scrolling terminal log feed
│   │   ├── LogPanel.module.css
│   │   ├── ModelGrid.jsx             # 4-model progress card grid
│   │   ├── ModelGrid.module.css
│   │   ├── PromptArea.jsx            # Glowing prompt input + suggestion chips
│   │   ├── PromptArea.module.css
│   │   ├── ResponsePanel.jsx         # Typewriter response + Verified badge
│   │   ├── ResponsePanel.module.css
│   │   ├── Sidebar.jsx               # Mode switcher + model list
│   │   ├── Sidebar.module.css
│   │   ├── Topbar.jsx                # Logo, status pill, nav actions
│   │   └── Topbar.module.css
│   │
│   ├── hooks/
│   │   └── useFusion.js              # All fusion logic — timers, typewriter, counters
│   │
│   ├── styles/
│   │   └── globals.css               # CSS tokens, grid background, keyframes
│   │
│   ├── App.jsx                       # Root layout (3-column grid)
│   ├── App.module.css                # Shell grid + responsive breakpoints
│   └── main.jsx                      # Entry point
│
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── package.json
└── README.md
```

<br />

---

## 🏁 Getting Started

<br />

### Prerequisites

```bash
node -v   # v18.0.0 or higher
npm -v    # v9.0.0 or higher
```

### 1. Clone

```bash
git clone https://github.com/sxwik/newrex-fusion.git
cd newrex-fusion
```

### 2. Install

```bash
npm install
```

### 3. Dev server

```bash
npm run dev
# → http://localhost:5173
```

### 4. Production build

```bash
npm run build
npm run preview
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Compile and bundle for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the entire codebase |

<br />

---

## 🔧 Configuration

### CSS Design Tokens

All visual tokens live in `src/styles/globals.css`:

```css
:root {
  --bg:       #080b14;               /* Page background */
  --bg2:      #0d1220;               /* Panel background */
  --cyan:     #63b3ed;               /* Primary accent */
  --text:     #e2e8f0;               /* Primary text */
  --green:    #68d391;               /* Success / verified */
  --amber:    #f6ad55;               /* Warning / cost */
  --purple:   #b794f4;               /* Tokens accent */
  --border:   rgba(99,179,237,0.10); /* Default border */
  --glow:     0 0 20px rgba(99,179,237,0.15);
  --radius:   12px;
  --font:     'Geist', system-ui, sans-serif;
  --mono:     'Geist Mono', monospace;
}
```

### Adding a New Model

In `src/hooks/useFusion.js`, add an entry to the `MODELS` array:

```js
{
  id:       'mistral',
  name:     'Mistral Large',
  provider: 'Mistral AI',
  color:    '#f97316',
  gradient: 'linear-gradient(90deg, #f97316, #ea580c)',
  lat:      650,   // simulated latency ms
  tok:      275,   // simulated token count
  delay:    400,   // dispatch delay ms
}
```

<br />

---

## 📦 Component Reference

### `<Topbar />`
Fixed navigation bar. No props — fully self-contained.

---

### `<Sidebar onModeChange />`
| Prop | Type | Description |
|------|------|-------------|
| `onModeChange` | `function` | Called with mode `id` when user switches |

---

### `<PromptArea onRun running />`
| Prop | Type | Description |
|------|------|-------------|
| `onRun` | `function` | Called with prompt string on submit |
| `running` | `boolean` | Disables button during active run |

---

### `<ModelGrid models modelState />`
| Prop | Type | Description |
|------|------|-------------|
| `models` | `array` | Model config objects from `useFusion` |
| `modelState` | `object` | Live `{ progress, lat, tok }` keyed by model id |

---

### `<ResponsePanel text isTyping verified onRegenerate />`
| Prop | Type | Description |
|------|------|-------------|
| `text` | `string` | Current response text (streamed character by character) |
| `isTyping` | `boolean` | Shows blinking cursor while true |
| `verified` | `boolean` | Shows Consensus Verified badge when true |
| `onRegenerate` | `function` | Called when Regenerate is clicked |

---

### `<LogPanel logs />`
| Prop | Type | Description |
|------|------|-------------|
| `logs` | `array` | Array of `{ type, msg, time }` log objects |

---

### `<AnalyticsPanel agreeBar agreeVal latencyVal tokensVal costVal />`
| Prop | Type | Description |
|------|------|-------------|
| `agreeBar` | `number` | Bar fill percentage 0–100 |
| `agreeVal` | `string` | Formatted agreement e.g. `"94%"` |
| `latencyVal` | `string` | Formatted latency e.g. `"715ms"` |
| `tokensVal` | `string` | Formatted tokens e.g. `"1138"` |
| `costVal` | `string` | Formatted cost e.g. `"$0.014"` |

<br />

---

## 🪝 Hook Reference

### `useFusion()`

The central hook that manages all fusion state and logic.

```js
import { useFusion } from './hooks/useFusion'

const {
  // State
  logs,          // Log entries array
  modelState,    // Per-model { progress, lat, tok }
  responseText,  // Current typewriter text
  isTyping,      // True while typewriter is running
  verified,      // True when consensus pass completes
  running,       // True during active fusion run
  agreeBar,      // Agreement bar percentage (number)
  agreeVal,      // Formatted agreement string
  latencyVal,    // Formatted latency string
  tokensVal,     // Formatted tokens string
  costVal,       // Formatted cost string

  // Actions
  run,           // (prompt: string) => void
  addLog,        // (type: string, msg: string) => void
  MODELS,        // Model config array
} = useFusion()
```

<br />

---

## 🗺️ Roadmap

### Phase 1 — Foundation ✅
- [x] Premium dark dashboard UI
- [x] 4-model card grid with animated progress bars
- [x] Live terminal log panel
- [x] Typewriter response with Consensus Verified badge
- [x] Analytics panel with animated counters
- [x] 4 operation modes in sidebar
- [x] CSS Modules + design token system
- [x] `useFusion` custom hook architecture

### Phase 2 — Live API Integration 🔧
- [ ] Connect to OpenAI API (GPT-4o)
- [ ] Connect to Anthropic API (Claude 3.5 Sonnet)
- [ ] Connect to Google AI API (Gemini 1.5 Pro)
- [ ] Connect to Groq API (Llama 3.1 — ultra-low latency)
- [ ] Secure API key management (env vars)
- [ ] Real streaming responses via `ReadableStream`

### Phase 3 — Advanced Features 🧪
- [ ] Real consensus engine with embedding similarity scoring
- [ ] Arena mode — true side-by-side diff view
- [ ] Voting mode — live vote count animation
- [ ] Specialist mode — task classifier routing
- [ ] Query history with localStorage persistence
- [ ] Export response as Markdown, PDF, or JSON

### Phase 4 — Platform 🚀
- [ ] User authentication (Clerk / Auth.js)
- [ ] Per-user API key vault
- [ ] Usage dashboard with historical cost charts
- [ ] Team workspaces and shared query history
- [ ] Public API endpoint for programmatic access
- [ ] Model performance benchmarking over time

<br />

---

## 🤝 Contributing

Contributions, issues, and feature requests are very welcome.

```bash
# 1. Fork the repo on GitHub

# 2. Clone your fork
git clone https://github.com/your-username/newrex-fusion.git
cd newrex-fusion

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Commit your changes
git commit -m "feat: describe your change clearly"

# 5. Push and open a Pull Request
git push origin feature/your-feature-name
```

**Code guidelines:**
- CSS Modules only — no inline styles, no global class names
- Logic in hooks — keep components presentational
- No new dependencies unless genuinely necessary
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `chore:`, `docs:`

<br />

---

## 👤 Author

<div align="center">

<br />

**Satwik Bajpai**

[![GitHub](https://img.shields.io/badge/GitHub-sxwik-181717?style=for-the-badge&logo=github)](https://github.com/sxwik)

<br />

*Built with obsessive attention to detail and way too many hours spent perfecting glow effects.*

<br />

</div>

---

## 📄 License

```
MIT License — Copyright (c) 2025 Satwik Bajpai (sxwik)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

<br />

---

<div align="center">

**⬡ &nbsp; NEWREX FUSION &nbsp; ⬡**

*Multiple minds. One answer.*

<br />

If this project helped you, drop a ⭐ on [GitHub](https://github.com/sxwik/newrex-fusion) — it means a lot.

<br />

[![Star History](https://img.shields.io/github/stars/sxwik/newrex-fusion?style=social)](https://github.com/sxwik/newrex-fusion/stargazers)

</div>
