import { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import styles from './ChatInput.module.css';

export default function ChatInput({ onSend }) {
  const [value, setValue] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSend(value.trim());
    setValue('');
  };
  return (
    <form className={styles.wrap} onSubmit={submit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Ask Newrex Fusion AI...' />
      <button type='submit' aria-label='Send message'>
        <ArrowUp size={16} />
      </button>
    </form>
  );
}
