import styles from './Topbar.module.css'

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>⬡</div>
        NEWREX <span className={styles.accent}>FUSION</span>
      </div>
      <div className={styles.divider} />
      <span className={styles.tagline}>Multiple minds. One answer.</span>
      <div className={styles.right}>
        <div className={styles.statusPill}>
          <div className={styles.statusDot} />
          4 models online
        </div>
        <button className={styles.topBtn}>API Docs</button>
        <button className={styles.topBtn}>Settings</button>
      </div>
    </header>
  )
}
