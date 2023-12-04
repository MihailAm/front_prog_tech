'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Doctor } from '../../components/Doctor/Doctor';
import { DoctorProps } from '@/interfaces/doctor.interface';
import { getDoctorsBySpecialization } from '@/app/api';

interface DoctorsProps {
  specialization: string;
}

export const Doctors: React.FC<DoctorsProps> = ({ specialization }) => {
  const [doctors, setDoctors] = useState<DoctorProps[]>([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      if (specialization) {
        const data = await getDoctorsBySpecialization(specialization);
        setDoctors(data);
      }
    };

    fetchDoctors();
  }, [specialization]);

  return (
    <div>
      {doctors.map((doctor) => (
        <Doctor key={doctor.id} {...doctor} />
      ))}
    </div>
  );
};

