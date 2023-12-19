// DoctorForm.jsx

import React, { useState, useEffect } from 'react';
import { DoctorProps } from '../../interfaces/doctor.interface';

interface DoctorFormProps {
  doctor?: DoctorProps | null; // Возможно, врач не передан при добавлении
  onClose: () => void;
  // Добавьте другие пропсы, если необходимо
  // Например, функцию обновления списка врачей
  // updateDoctorsList: (updatedDoctor: DoctorProps) => void;
}

export const DoctorForm: React.FC<DoctorFormProps> = ({ doctor, onClose }) => {
  const [formData, setFormData] = useState<DoctorProps>({
    id: 0,
    surname: '',
    name: '',
    experience: 0,
    post: '',
    specName: '',
    userId: 0,
  });

  useEffect(() => {
    if (doctor) {
      setFormData({
        id: doctor.id,
        surname: doctor.surname,
        name: doctor.name,
        experience: doctor.experience,
        post: doctor.post,
        specName: doctor.specName,
        userId: doctor.userId,
      });
    }
  }, [doctor]);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Реализуйте логику добавления/редактирования врача
    // Например, с использованием fetch и метода POST или PUT
    try {
      const response = await fetch('https://localhost:7025/api/doctors', {
        method: doctor ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          // Добавьте другие поля, если необходимо
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${doctor ? 'edit' : 'add'} doctor`);
      }

      // Обновите список врачей после добавления/редактирования
      // const updatedDoctor = await response.json();
      // updateDoctorsList(updatedDoctor);

      onClose(); // Закрыть форму после успешного добавления/редактирования
    } catch (error) {
      console.error(`Error ${doctor ? 'editing' : 'adding'} doctor:`, error);
    }
  };

  return (
    <div>
      <h2>{doctor ? 'Edit Doctor' : 'Add Doctor'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Surname:
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Experience:
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} />
        </label>
        <label>
          Post:
          <input type="text" name="post" value={formData.post} onChange={handleChange} />
        </label>
        <label>
          SpecName:
          <input type="text" name="specName" value={formData.specName} onChange={handleChange} />
        </label>
        <label>
          UserId:
          <input type="text" name="userId" value={formData.userId} onChange={handleChange} />
        </label>
        <button type="submit">{doctor ? 'Edit' : 'Add'}</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};
