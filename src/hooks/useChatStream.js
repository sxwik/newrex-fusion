import { useRef } from 'react';
import { api } from '../lib/api';

export function useChatStream(token) {
  const wsRef = useRef(null);

  const stream = (prompt, { onToken, onDone }) => {
    if (!token) return;
    wsRef.current?.close();
    wsRef.current = new WebSocket(api.wsUrl(token));
    wsRef.current.onopen = () => wsRef.current.send(JSON.stringify({ prompt }));
    wsRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'token') onToken?.(data.token);
      if (data.type === 'done') { onDone?.(data); wsRef.current.close(); }
    };
  };

  return { stream };
}
