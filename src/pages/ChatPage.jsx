import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatInput from '../components/ChatInput';
import { useAuth } from '../context/AuthContext';
import { api } from '../lib/api';
import { useChatStream } from '../hooks/useChatStream';
import styles from './ChatPage.module.css';

const SUGGESTIONS = [
  'Design a premium launch plan for my AI startup.',
  'Summarize today\'s key market signals in 5 bullets.',
  'Rewrite my product pitch to sound world-class.',
  'Create a 30-day growth roadmap for Newrex Fusion.'
];

export default function ChatPage() {
  const { token } = useAuth();
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const { stream } = useChatStream(token);

  useEffect(() => { api.history(token).then(setChats).catch(console.error); }, [token]);

  const send = async (prompt) => {
    setMessages((m) => [...m, { role: 'user', content: prompt }, { role: 'assistant', content: '' }]);
    stream(prompt, {
      onToken: (t) => setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1].content += t;
        return copy;
      }),
      onDone: async () => {
        const res = await api.message(token, { chatId: activeChatId, prompt });
        if (!activeChatId) setActiveChatId(res.chatId);
      }
    });
  };

  const empty = messages.length === 0;

  return (
    <div className={styles.layout}>
      <Sidebar chats={chats} onNewChat={() => { setActiveChatId(null); setMessages([]); }} onSelectChat={(c) => { setActiveChatId(c._id); setMessages(c.messages || []); }} />
      <main className={styles.chatArea}>
        <div className={styles.betaBadge}>BETA</div>

        {empty ? (
          <section className={styles.welcome}>
            <h1>What can I help with today?</h1>
            <div className={styles.suggestions}>
              {SUGGESTIONS.map((item) => <button key={item} onClick={() => send(item)}>{item}</button>)}
            </div>
          </section>
        ) : (
          <div className={styles.messages}>
            {messages.map((m, i) => <div key={i} className={`${styles.message} ${styles[m.role]}`}>{m.content}</div>)}
          </div>
        )}

        <ChatInput onSend={send} />
      </main>
    </div>
  );
}
