'use client'
import { MenuAdmin } from '@/components/MenuAdmin/menuAdmin';
import React from 'react';
import styles from './adminCabinet.module.css';


export default function Home() {
    
    return (
      <>
      <div>
        <h1 className={styles.admin}>Личный кабинет Администратора</h1>
      </div>
      <MenuAdmin className={styles.MenuAdmin} />
      </>

    )
}