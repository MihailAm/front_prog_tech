'use client'
import { DoctorProps } from '../../interfaces/doctor.interface';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


interface IdProps {
    id: number;
  }

export const Admission: React.FC<IdProps> = ({ id }) => {
  
  const [doctor, setDoctor] = useState<DoctorProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`https://localhost:7025/api/doctors/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const doctorData = await response.json();
        setDoctor(doctorData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching doctor:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchDoctor();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!doctor) {
    return <div>Doctor not found</div>;
    
  }
  
  return (
    <div>
      <h1>{`${doctor.surname} ${doctor.name}`}</h1>
      <p>Стаж работы: {doctor.experience} years</p>
      <p>Пост: {doctor.post}</p>
      <p>Специализация: {doctor.specName}</p>
      {/* Остальные данные о враче */}
    </div>
  );
};

