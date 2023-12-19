// ServiceTable.tsx

import React from 'react';
import { Service } from '../../interfaces/service.interface';

interface ServiceTableProps {
  services: Service[];
  onEditService: (service: Service) => void;
  onDeleteService: (id: number) => void;
}

export const ServiceTable: React.FC<ServiceTableProps> = ({ services, onEditService, onDeleteService }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Service Name</th>
          <th>Description</th>
          <th>Cost</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr key={service.id}>
            <td>{service.id}</td>
            <td>{service.serviceName}</td>
            <td>{service.descriptionService}</td>
            <td>{service.costService}</td>
            <td>
              <button onClick={() => onEditService(service)}>Edit</button>
              <button onClick={() => onDeleteService(service.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
