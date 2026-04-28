import { useState } from 'react'
import styles from './PromptArea.module.css'

const CHIPS = [
  'Explain quantum entanglement',
  'Write a Python web scraper',
  'Best ML model for tabular data?',
  'Summarise the French Revolution',
]

export default function PromptArea({ onRun, running }) {
  const [value, setValue] = useState('')

  function handleRun() {
    onRun(value || 'Explain quantum computing')
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.label}>Fusion Prompt</div>
      <textarea
        className={styles.input}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Ask anything — all models will respond simultaneously…"
        onKeyDown={e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleRun() }}
      />
      <div className={styles.footer}>
        {CHIPS.map(chip => (
          <span key={chip} className={styles.chip} onClick={() => setValue(chip)}>
            {chip}
          </span>
        ))}
        <button className={styles.runBtn} onClick={handleRun} disabled={running}>
          <span>{running ? '⟳' : '▶'}</span>
          {running ? 'Running…' : 'Run Fusion'}
        </button>
      </div>
    </div>
  )
}
