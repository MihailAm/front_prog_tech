'use client'
import React from 'react';
import styles from './medCard.module.css';



export default function Home() {
    
    return (
    
        <div className={styles.medcard}>
          <div className={styles.patientinfo}>
            <h2>Амосов Михаил</h2>
            <p>Дата рождения: 24.11.2003</p>
            <p>Пол: Мужской</p>
          </div>
        
          <div className={styles.appointments}>
            <h3>Список приемов:</h3>
            <ul>
              <li>
                <div className={styles.doctorinfo}>
                  <p>Доктор: Маркин Иван (Офтальмолог)</p>
                </div>
                <p>Дата и время: 03.11.2023 10:15</p>
                <p>Заключение врача: Корректирующие линзы, на правый глаз -2.5 на левый -2.75</p>
              </li>
              <li>
                <div className={styles.doctorinfo}>
                  <p>Доктор: Степанян Артур (Терапевт)</p>
                </div>
                <p>Дата и время: 28.11.2023 11:35</p>
                <p>Заключение врача: Таблетки кагоцел 3 раза в день по 1 штуке, спрей в нос, в день минимум 2.5л воды</p>
              </li>
            </ul>
          </div>
        </div>
        
    
    )
}