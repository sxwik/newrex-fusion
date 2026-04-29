import styles from './Sidebar.module.css';

export default function Sidebar({ chats, onNewChat, onSelectChat, onLogout }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Newrex Fusion • Early Access</div>
      <button className={styles.newChat} onClick={onNewChat}>+ New chat</button>
      <div className={styles.sectionTitle}>History</div>
      <div className={styles.history}>
        {chats.map((c) => (
          <button key={c._id || c.id} className={styles.historyItem} onClick={() => onSelectChat(c)}>{c.title}</button>
        ))}
      </div>
      <div className={styles.bottom}>
        <button className={styles.settings}>Settings</button>
        <button className={styles.logout} onClick={onLogout}>Logout</button>
      </div>
    </aside>
  );
}
