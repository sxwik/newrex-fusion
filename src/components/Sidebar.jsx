import { useState } from 'react'
import styles from './Sidebar.module.css'

const MODES = [
  { id: 'consensus', icon: '⊕', label: 'Consensus', badge: 'Default', desc: 'Recursive peer-review between models to produce one verified answer.' },
  { id: 'arena',     icon: '⊞', label: 'Arena',     badge: null,      desc: 'Side-by-side output comparison across all active models.' },
  { id: 'voting',    icon: '◉', label: 'Voting',    badge: null,      desc: 'Models vote; majority result shown with confidence scores.' },
  { id: 'specialist',icon: '◈', label: 'Specialist',badge: null,      desc: 'Task-based routing — coding→GPT, creative→Claude, math→Gemini, fast→Llama.' },
]

const MODELS = [
  { color: '#63b3ed', name: 'GPT-4o',     provider: 'OpenAI'    },
  { color: '#b794f4', name: 'Claude 3.5', provider: 'Anthropic' },
  { color: '#68d391', name: 'Gemini 1.5', provider: 'Google'    },
  { color: '#f6ad55', name: 'Llama 3.1',  provider: 'Meta'      },
]

export default function Sidebar({ onModeChange }) {
  const [activeMode, setActiveMode] = useState('consensus')

  function select(id) {
    setActiveMode(id)
    onModeChange?.(id)
  }

  return (
    <nav className={styles.sidebar}>
      <div className={styles.section}>Operation Mode</div>

      {MODES.map(m => (
        <div key={m.id}>
          <div
            className={`${styles.navItem} ${activeMode === m.id ? styles.active : ''}`}
            onClick={() => select(m.id)}
          >
            <span className={styles.icon}>{m.icon}</span>
            {m.label}
            {m.badge && <span className={styles.badge}>{m.badge}</span>}
          </div>
          {activeMode === m.id && (
            <div className={styles.modeDesc}>{m.desc}</div>
          )}
        </div>
      ))}

      <div className={styles.section}>Models</div>

      {MODELS.map(m => (
        <div key={m.name} className={styles.navItem}>
          <span className={styles.dot} style={{ background: m.color }} />
          {m.name}
        </div>
      ))}

      <div className={styles.section}>History</div>
      <div className={`${styles.navItem} ${styles.muted}`}>No recent queries</div>
    </nav>
  )
}
