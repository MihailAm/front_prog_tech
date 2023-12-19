
import React from 'react';
import styles from './doctorReport.module.css';
import { Button } from '@/components/Button/Button';
import Link from 'next/link';

export default function Home() {
    
    return (
<div className={styles.appointmentCard}>
      <p className={styles.patientInfo}>Пациент: Маркин Иван </p>
      <p>Дата рождения: 24.11.2003</p>
      <p>Пол: Мужской</p>
      <p>10:30</p>
  
      <div className={styles.additionalInfo}>
        <label>Жалобы:</label>
        <textarea  placeholder="Введите жалобы пациента"></textarea>
      </div>

      <div className={styles.additionalInfo}>
        <label>Заключение:</label>
        <textarea  placeholder="Введите заключение"></textarea>
      </div>
      <Link href="/CabinetDoc">
      <Button appearance={'primary'}>Закончить прием</Button>
      </Link>
    </div>
    )
}