import styles from './AnalyticsPanel.module.css'

export default function AnalyticsPanel({ agreeBar, agreeVal, latencyVal, tokensVal, costVal }) {
  return (
    <div className={styles.panel}>
      <div className={styles.title}>Analytics</div>

      <div className={styles.statRow}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Agreement</div>
          <div className={`${styles.statValue} ${styles.green}`}>{agreeVal}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Avg Latency</div>
          <div className={`${styles.statValue} ${styles.cyan}`}>{latencyVal}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Total Tokens</div>
          <div className={`${styles.statValue} ${styles.purple}`}>{tokensVal}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Est. Cost</div>
          <div className={`${styles.statValue} ${styles.amber}`}>{costVal}</div>
        </div>
      </div>

      <div className={styles.agreeSection}>
        <div className={styles.agreeHeader}>
          <span className={styles.agreeLabel}>Model agreement score</span>
          <span className={styles.agreePct}>{agreeBar > 0 ? `${agreeBar}%` : '0%'}</span>
        </div>
        <div className={styles.barWrap}>
          <div className={styles.bar} style={{ width: `${agreeBar}%` }} />
        </div>
        <div className={styles.barLabels}>
          <span>Divergent</span>
          <span>Unified</span>
        </div>
      </div>
    </div>
  )
}
