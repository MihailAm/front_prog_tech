'use client'
import React from 'react';
import { Admission } from '../../../../components';




export default function Home({params}:{params:{id:number}}) {
    
    return (
    <Admission id={params.id}/>
    )
}