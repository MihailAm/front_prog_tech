'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import {Tag, P, Button, Htag } from '../components';
import cn from 'classnames';
import { API } from './api';
import { MenuItem } from '@/interfaces/menu.interface';


async function getMenu(firstCategory: number): Promise<MenuItem[]> {
  const res = await fetch(API.topPage.find,{
    method: 'POST',
    body:JSON.stringify({
      firstCategory
    }),
    headers: new Headers({'content-type':'application/json'})
  });
  return res.json();
}

export default async function Home() {
  const menu = await getMenu(0);
  return (
    <>
      <div>
        {JSON.stringify(menu)}
      </div>
      
    </>
  
  )
}
