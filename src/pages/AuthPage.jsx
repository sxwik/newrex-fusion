import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import styles from './AuthPage.module.css';

export default function AuthPage() {
  const { login, signup } = useAuth();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const submit = async (e) => {
    e.preventDefault();
    if (mode === 'login') await login({ email: form.email, password: form.password });
    else await signup(form);
  };

  return (
    <div className={styles.page}>
      <form className={styles.card} onSubmit={submit}>
        <h1>Newrex Fusion</h1>
        {mode === 'signup' && <input placeholder='Name' onChange={(e) => setForm({ ...form, name: e.target.value })} />}
        <input placeholder='Email' onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input placeholder='Password' type='password' onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type='submit'>{mode === 'login' ? 'Login' : 'Sign up'}</button>
        <p onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
          {mode === 'login' ? 'No account? Sign up' : 'Already have an account? Login'}
        </p>
      </form>
    </div>
  );
}
