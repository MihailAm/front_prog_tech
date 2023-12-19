// DoctorTable.tsx
import React from 'react';
import { DoctorProps } from '../../interfaces/doctor.interface'; // Путь к вашему файлу с интерфейсами
import css from './DoctorTable.module.css';

interface DoctorTableProps {
  doctors: DoctorProps[];
  onEditDoctor: (doctor: DoctorProps) => void;
  onDeleteDoctor: (id: number) => void;
}

export const DoctorTable: React.FC<DoctorTableProps> = ({ doctors, onEditDoctor, onDeleteDoctor }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Experience</th>
          <th>Post</th>
          <th>Actions</th>
          <th>function</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor) => (
          <tr key={doctor.id}>
            <td>{doctor.id}</td>
            <td>{`${doctor.surname} ${doctor.name}`}</td>
            <td>{doctor.experience} years</td>
            <td>{doctor.specName}</td>
            <td>{doctor.post}</td>
            <td>
              <button onClick={() => onEditDoctor(doctor)}>Edit</button>
              <button onClick={() => onDeleteDoctor(doctor.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

