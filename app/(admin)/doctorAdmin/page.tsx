'use client'
import React, { useState, useEffect } from 'react';
import { getDoctorsData } from '../../api'; 
import {DoctorTable} from '../../../components/DoctorTable/DoctorTable'; 
import {DoctorForm} from '../../../components/DoctorForm/DoctorForm'; 
import { DoctorProps } from '@/interfaces/doctor.interface';
import styles from './doctorAdmin.module.css';
import { MenuAdmin } from '@/components';


export default function DoctorAdminPage () {
  const [doctors, setDoctors] = useState<DoctorProps[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorProps>();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const doctorsData = await getDoctorsData();
      setDoctors(doctorsData);
    };

    fetchData();
  }, []);

  const handleAddDoctor = () => {
    setShowForm(true);
    setSelectedDoctor(undefined);
  };

  const handleEditDoctor = (doctor: DoctorProps) => {
    setShowForm(true);
    setSelectedDoctor(doctor);
  };
  

  const handleDeleteDoctor = async (id: any) => {
    // Реализуйте логику удаления врача
    // Например, с использованием fetch и метода DELETE
    try {
      const response = await fetch(`https://localhost:7025/api/doctors/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete doctor');
      }

      // Обновите список врачей после удаления
      const updatedDoctors = doctors.filter((doctor) => doctor.id !== id);
      setDoctors(updatedDoctors);
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setSelectedDoctor(undefined);
  };

  return (
    <div>
        
        <div className={styles.title}>
      <h1>Упрвление докторами</h1>
      <button onClick={handleAddDoctor}>Add Doctor</button>
      <MenuAdmin className={styles.MenuAdmin} />
      </div>

      <div className={styles.table}>
      <DoctorTable
        doctors={doctors}
        onEditDoctor={handleEditDoctor}
        onDeleteDoctor={handleDeleteDoctor}
      />
      </div>

      <div className={styles.form}>
      {showForm && (
        <DoctorForm
          doctor={selectedDoctor}
          onClose={handleFormClose}
        />
      )}
      </div>
    </div>
  );
};


