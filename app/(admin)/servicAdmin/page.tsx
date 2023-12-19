'use client'

import React, { useState, useEffect } from 'react';
import { Service } from '../../../interfaces/service.interface';
import { getServices } from '../../api'; 
import { ServiceTable } from '@/components/ServiceTable/ServiceTable';
import { ServiceForm } from '@/components/ServiceForm/ServiceForm';
import styles from './servicAdmin.module.css';
import { MenuAdmin } from '@/components/MenuAdmin/menuAdmin';

export default function ServiceAdminPage () {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await getServices();
      setServices(servicesData);
    };

    fetchServices();
  }, []);

  const handleEditService = (service: Service) => {
    setShowForm(true);
    setSelectedService(service);
  };

  const handleDeleteService = async (id: number) => {
    // Реализуйте логику удаления услуги
    // Например, с использованием fetch и метода DELETE
    try {
      const response = await fetch(`https://localhost:7117/api/services/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete service');
      }

      // Обновите список услуг после удаления
      const updatedServices = services.filter((service) => service.id !== id);
      setServices(updatedServices);
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedService(null);
  };

  return (
    <div>
        <div className={styles.title}>
            <h1>Управление услугами</h1>
            <button onClick={() => setShowForm(true)}>Add Service</button>
            <MenuAdmin className={styles.MenuAdmin} />
        </div>

      <div className={styles.table}>
        <ServiceTable
            services={services}
            onEditService={handleEditService}
            onDeleteService={handleDeleteService}
        />
      </div>
       <div className={styles.form}>
            {showForm && (
                <ServiceForm
                service={selectedService}
                onClose={handleCloseForm}
                />
            )}
       </div>
    </div>
  );
};
