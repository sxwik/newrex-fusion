import styles from './ModelGrid.module.css'

export default function ModelGrid({ models, modelState }) {
  return (
    <div className={styles.grid}>
      {models.map(m => {
        const state = modelState[m.id]
        return (
          <div key={m.id} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.dot} style={{ background: m.color }} />
              <span className={styles.name}>{m.name}</span>
              <span className={styles.provider}>{m.provider}</span>
            </div>
            <div className={styles.barWrap}>
              <div
                className={styles.bar}
                style={{ width: `${state.progress}%`, background: m.gradient }}
              />
            </div>
            <div className={styles.stats}>
              <span>Latency: <span className={styles.val}>{state.lat ? `${state.lat}ms` : '—'}</span></span>
              <span>Tokens: <span className={styles.val}>{state.tok ?? '—'}</span></span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
