import { MessageSquarePlus, History } from 'lucide-react';
import styles from './Sidebar.module.css';

export default function Sidebar({ chats, onNewChat, onSelectChat }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoWrap}>
        <div className={styles.dot} />
        <div className={styles.logo}>Newrex Fusion • Early Access</div>
      </div>

      <button className={styles.newChat} onClick={onNewChat}>
        <MessageSquarePlus size={16} />
        <span>New Chat</span>
      </button>

      <div className={styles.sectionTitle}><History size={13} /> History</div>
      <div className={styles.history}>
        {chats.map((c) => (
          <button key={c._id || c.id} className={styles.historyItem} onClick={() => onSelectChat(c)}>{c.title}</button>
        ))}
      </div>
    </aside>
  );
}
