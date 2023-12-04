'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Registration.module.css';

export const Registration = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value);
  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value);
  const handleFirstNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setFirstName(e.target.value);
  const handleLastNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setLastName(e.target.value);
  const handlePatronymicChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setPatronymic(e.target.value);

  
  // const handleRegistration = async () => {
  //   // Подготовка данных для отправки
  //   const userData = {
  //     firstName,
  //     lastName,
  //     patronymic,
  //     email,
  //     password,
  //   };

  //   try {
  //     // Отправка данных на сервер
  //     const response = await fetch('/api/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(userData),
  //     });

  //     if (response.ok) {
  //       // Если регистрация успешна, вызываем колбэк
  //       onRegistrationSuccess();
  //     } else {
  //       // Обработка ошибок
  //       console.error('Registration failed');
  //     }
  //   } catch (error) {
  //     console.error('Error during registration:', error);
  //   }
  // };

  return (
    <div className={styles.container}>
      <label className={styles.label}>First Name:</label>
      <input className={styles.input} type="text" value={firstName} onChange={handleFirstNameChange} />

      <label className={styles.label}>Last Name:</label>
      <input className={styles.input} type="text" value={lastName} onChange={handleLastNameChange} />

      <label className={styles.label}>Fathername:</label>
      <input className={styles.input} type="text" value={patronymic} onChange={handlePatronymicChange} />

      <label className={styles.label}>Email:</label>
      <input className={styles.input} type="text" value={email} onChange={handleEmailChange} />

      <label className={styles.label}>Password:</label>
      <input className={styles.input} type="password" value={password} onChange={handlePasswordChange} />

      {/* <button className={styles.loginButton} onClick={handleRegistration}>Register</button> */}

    </div>
  );
};

function onRegistrationSuccess() {
  throw new Error('Function not implemented.');
}

