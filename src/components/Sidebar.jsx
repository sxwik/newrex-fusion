import { MessageSquarePlus, History, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import styles from './Sidebar.module.css';

export default function Sidebar({ chats, onNewChat, onSelectChat, collapsed, onToggle }) {
  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.logoWrap}>
        <div className={styles.logoRow}>
          <div className={styles.dot} />
          {!collapsed && <div className={styles.logo}>Newrex Fusion</div>}
          <button className={styles.toggle} onClick={onToggle}>{collapsed ? <PanelLeftOpen size={14} /> : <PanelLeftClose size={14} />}</button>
        </div>
        {!collapsed && <div className={styles.sub}>Early Access</div>}
      </div>

      <button className={styles.newChat} onClick={onNewChat}>
        <MessageSquarePlus size={16} />
        {!collapsed && <span>New Chat</span>}
      </button>

      {!collapsed && <div className={styles.sectionTitle}><History size={13} /> History</div>}
      <div className={styles.history}>
        {chats.map((c) => (
          <button key={c._id || c.id} className={styles.historyItem} onClick={() => onSelectChat(c)}>{collapsed ? '•' : c.title}</button>
        ))}
      </div>
    </aside>
  );
}
