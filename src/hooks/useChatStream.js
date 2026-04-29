import { api } from '../lib/api';

export function useChatStream() {
  const stream = async (prompt, { onToken, onDone, onError }) => {
    try {
      const result = await api.chat(prompt);
      onToken?.(result.content || '');
      onDone?.();
    } catch (err) {
      onError?.(err);
    }
  };

  return { stream };
}
