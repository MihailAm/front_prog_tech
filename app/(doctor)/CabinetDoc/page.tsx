'use client'
import React from 'react';
import styles from './doctorCabinet.module.css';
import { Button } from '@/components';
import Link from 'next/link';


export default function Home() {
    
    return (
    
        <div className={styles.medcard}>
            <h1>Расписание</h1>
          <div className={styles.patientinfo}>
            <h2>Врач: Амосов Михаил</h2>
          </div>
        
          <div className={styles.appointments}>
            <h3>Список приемов:</h3>
            <ul>
              <li>
                <div className={styles.doctorinfo}>
                  <p>Пациент: Маркин Иван </p>
                </div>
                <p>Дата рождения: 24.11.2003</p>
                <p>Пол: Мужской</p>
                <p>10:30</p>
                <Link href="/doctorReport">
                <Button appearance={'primary'}>Начать прием</Button>
                </Link>
              </li>
              <li>
                <div className={styles.doctorinfo}>
                    <p>Пациент: Палкин Петя </p>
                </div>
                    <p>Дата рождения: 27.09.2000</p>
                    <p>Пол: Мужской</p>
                    <p>12:00</p>
                    <Link href="/doctorReport">
                    <Button appearance={'primary'}>Начать прием</Button>
                    </Link>
              </li>
            </ul>
          </div>
        </div>
        
    
    )
}