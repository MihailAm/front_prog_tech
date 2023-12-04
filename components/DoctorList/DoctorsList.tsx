// app/DoctorsList.tsx
import React from 'react';
import { getDoctorsData } from '../../app/api';
import { Doctor } from '../Doctor/Doctor';
import { DoctorProps } from '@/interfaces/doctor.interface';

export const DoctorsList: React.FC = () => {
  const [doctors, setDoctors] = React.useState<DoctorProps[]>([]);

  React.useEffect(() => {
    const fetchDoctors = async () => {
      const data = await getDoctorsData();
      setDoctors(data);
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      {doctors.map((doctor) => (
        <Doctor key={doctor.id} {...doctor} />
      ))}
    </div>
  );
};
