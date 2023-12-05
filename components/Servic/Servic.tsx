'use client'
import React from 'react';
import { Service } from '@/interfaces/service.interface';
import { Tag } from '../Tag/Tag';
import styles from './Servic.module.css';
import { Button } from '../Button/Button';


export const Servic: React.FC<Service> = ({serviceName,descriptionService,costService  }) => (
  <div className={styles.servicCard}>
    <div className={styles.content}>
    <h2>{serviceName}</h2>
    <p className={styles.text}>{descriptionService}</p>
    </div>
    <Button className={styles.button} appearance='primary'>Оплатить</Button>
    <div className={styles.costTag}>
      <Tag size='m' color='green'>{costService} ₽</Tag>
    </div>
  </div>
);

