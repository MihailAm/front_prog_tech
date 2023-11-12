import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import {P, Button, Htag } from '../components';
import cn from 'classnames';



export default function Home():JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Заголовок</Htag>
      <Button appearance='primary' arrow='right'>Записаться</Button>
      <Button appearance='ghost' arrow='down'>Оставить отзыв</Button>
      <P size='l'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>
    </div>
  
  )
}
