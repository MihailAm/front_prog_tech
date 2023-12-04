'use client'
import React from 'react';
import { DoctorProps } from '../../interfaces/doctor.interface';
import { Button } from '../Button/Button';
import styles from './Doctor.module.css';

export const Doctor: React.FC<DoctorProps> = ({ surname, name, experience, post, specName }) => (
  <div className={styles.doctorContainer}>
    <h2 className={styles.doctorName}>{`${surname} ${name}`}</h2>
    <p className={styles.doctorText}>Стаж работы: {experience} years</p>
    <p className={styles.doctorText}>Пост: {post}</p>
    <p className={styles.doctorText}>Специализация: {specName}</p>
    <Button appearance='primary'>Записаться</Button>
  </div>
);

