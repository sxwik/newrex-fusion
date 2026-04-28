import { useEffect, useRef } from 'react'
import styles from './LogPanel.module.css'

const ICONS = { info: 'ℹ', ok: '✓', warn: '⚠', err: '✕' }

export default function LogPanel({ logs }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [logs])

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.title}>Processing Logs</span>
        <div className={styles.dot} />
      </div>
      <div className={styles.scroll} ref={scrollRef}>
        {logs.map((log, i) => (
          <div key={i} className={styles.line}>
            <span className={styles.time}>{log.time}</span>
            <span className={`${styles.type} ${styles[log.type]}`}>{ICONS[log.type]}</span>
            <span className={styles.msg}>{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
