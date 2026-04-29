import { createContext, useContext, useMemo, useState } from 'react';
import { api } from '../lib/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('nrf_token'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('nrf_user') || 'null'));

  const login = async (payload) => {
    const data = await api.login(payload);
    setToken(data.token); setUser(data.user);
    localStorage.setItem('nrf_token', data.token);
    localStorage.setItem('nrf_user', JSON.stringify(data.user));
  };

  const signup = async (payload) => {
    const data = await api.signup(payload);
    setToken(data.token); setUser(data.user);
    localStorage.setItem('nrf_token', data.token);
    localStorage.setItem('nrf_user', JSON.stringify(data.user));
  };

  const logout = () => { setToken(null); setUser(null); localStorage.clear(); };

  const value = useMemo(() => ({ token, user, login, signup, logout, isAuthenticated: !!token }), [token, user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
