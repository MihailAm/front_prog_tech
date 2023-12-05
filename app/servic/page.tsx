'use client'
import React from 'react';
import { ServicList } from '../../components';
import styles from './style.module.css';


export default function ServisPage() {
    
    return (
      <div className={styles.gridContainer}>
       <ServicList/>
       </div>
    )
}