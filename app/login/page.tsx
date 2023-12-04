'use client'
import React from 'react';
import {Login, Tag } from '../../components';


export default function Home() {
    
    return (
      <div>
       <Login onLogin={function (email: string, password: string): void {
                throw new Error('Function not implemented.');
            } } onRegistration={function (): void {
                throw new Error('Function not implemented.');
            } }/>
      </div>
    
    )
  }