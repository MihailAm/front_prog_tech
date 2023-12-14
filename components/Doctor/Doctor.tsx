'use client'
import React, { useEffect } from 'react';
import { DoctorProps } from '../../interfaces/doctor.interface';
import { Button } from '../Button/Button';
import styles from './Doctor.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Doctor: React.FC<DoctorProps> = ({id, surname, name, experience, post, specName }) => {
  
return (
  <div className={styles.doctorContainer}>
    <h2 className={styles.doctorName}>{`${surname} ${name}`}</h2>
    <p className={styles.doctorText}>Стаж работы: {experience} years</p>
    <p className={styles.doctorText}>Пост: {post}</p>
    <p className={styles.doctorText}>Специализация: {specName}</p>
    <Link href={`/admission/${id}`}>
    <Button appearance='primary'>Записаться</Button>
    </Link>
  </div>
  )
};

