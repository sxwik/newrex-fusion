import styles from './ResponsePanel.module.css'

export default function ResponsePanel({ text, isTyping, verified, onRegenerate }) {
  function handleCopy() {
    if (text) navigator.clipboard.writeText(text).catch(() => {})
  }

  // Render text with newlines → <br>
  const lines = text.split('\n')

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.title}>Fused Response</span>
        {verified && (
          <div className={styles.badge}>
            ✓ Consensus Verified
          </div>
        )}
        <div className={styles.actions}>
          <button className={styles.iconBtn} onClick={handleCopy}>Copy</button>
          <button className={styles.iconBtn} onClick={onRegenerate}>Regenerate</button>
        </div>
      </div>

      <div className={styles.body}>
        {!text && !isTyping ? (
          <span className={styles.placeholder}>
            Run a fusion query to see the synthesised response here…
          </span>
        ) : (
          <span>
            {lines.map((line, i) => (
              <span key={i}>
                {line}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
            {isTyping && <span className={styles.cursor} />}
          </span>
        )}
      </div>
    </div>
  )
}
