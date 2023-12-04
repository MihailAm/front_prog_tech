'use client'
import React, { useState } from 'react';
import {LoginProps} from './Login.props';
import styles from './Login.module.css';
import { useRouter } from 'next/router';

export const Login: React.FC<LoginProps> = ({ onLogin, onRegistration }) => {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    onLogin(email, password);
  };

  const handleRegistration = () => {
    const router = useRouter();
    // Обработка регистрации
    // Переход на другую страницу
    router.push('/registration');
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Email:</label>
      <input className={styles.input} type="text" value={email} onChange={handleEmailChange} />

      <label className={styles.label}>Password:</label>
      <input className={styles.input} type="password" value={password} onChange={handlePasswordChange} />

      <button className={styles.loginButton} onClick={handleLogin}>
        Войти
      </button>
      <button className={styles.registrationButton} onClick={handleRegistration}>
        <a href='../registration/'>Регистрация</a>
      </button>
    </div>
  );
};


