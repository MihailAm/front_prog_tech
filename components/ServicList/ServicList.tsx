import React from 'react';
import { getServices } from '../../app/api';
import { Servic } from '../../components';
import { Service } from '@/interfaces/service.interface';
;


export const ServicList: React.FC = () => {
  const [services, setServices] = React.useState<Service[]>([]);

  React.useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();
      setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <>
      {services.map((service) => (
        <Servic key={service.id} {...service} />
      ))}
    </>
  );
};

