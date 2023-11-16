'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import {Tag, P, Button, Htag } from '../components';
import cn from 'classnames';




export default function Home():JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Записаться</Button>
      <Button appearance='ghost' arrow='down'>Оставить отзыв</Button>
      <P size='l'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Green</Tag>
    </>
  
  )
}
