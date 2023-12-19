// ServiceForm.tsx

import React, { useState, useEffect } from 'react';
import { Service } from '../../interfaces/service.interface';

interface ServiceFormProps {
  service?: Service | null;
  onClose: () => void;
  // Добавьте другие пропсы, если необходимо
  // Например, функцию обновления списка услуг
  // updateServicesList: (updatedService: Service) => void;
}

export const ServiceForm: React.FC<ServiceFormProps> = ({ service, onClose }) => {
  const [formData, setFormData] = useState<Service>({
    id: 0,
    serviceName: '',
    descriptionService: '',
    costService: 0,
  });

  useEffect(() => {
    if (service) {
      setFormData({
        id: service.id,
        serviceName: service.serviceName,
        descriptionService: service.descriptionService,
        costService: service.costService,
      });
    }
  }, [service]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Реализуйте логику добавления/редактирования услуги
    // Например, с использованием fetch и метода POST или PUT
    try {
      const response = await fetch('https://localhost:7117/api/services', {
        method: service ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          // Добавьте другие поля, если необходимо
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${service ? 'edit' : 'add'} service`);
      }

      // Обновите список услуг после добавления/редактирования
      // const updatedService = await response.json();
      // updateServicesList(updatedService);

      onClose(); // Закрыть форму после успешного добавления/редактирования
    } catch (error) {
      console.error(`Error ${service ? 'editing' : 'adding'} service:`, error);
    }
  };

  return (
    <div>
      <h2>{service ? 'Edit Service' : 'Add Service'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Service Name:
          <input type="text" name="serviceName" value={formData.serviceName} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="descriptionService" value={formData.descriptionService} onChange={handleChange} />
        </label>
        <label>
          Cost:
          <input type="text" name="costService" value={formData.costService} onChange={handleChange} />
        </label>
        <button type="submit">{service ? 'Edit' : 'Add'}</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};
