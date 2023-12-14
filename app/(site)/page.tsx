'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import {Tag, P, Button, Htag, DoctorsList } from '../../components';
import cn from 'classnames';

export default function Home() {
  return (
    <div>
      <DoctorsList/>
    </div>
  );
}



