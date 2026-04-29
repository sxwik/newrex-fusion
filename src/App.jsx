import { useAuth } from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import ChatPage from './pages/ChatPage';

export default function App() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <ChatPage /> : <AuthPage />;
}
