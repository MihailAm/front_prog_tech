import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import { Htag } from '../components';



export default function Home():JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Заголовок</Htag>
    </div>
  )
}
