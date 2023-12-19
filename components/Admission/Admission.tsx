'use client'
import { DoctorProps } from '../../interfaces/doctor.interface';
import styles from './Admission.module.css';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '../Button/Button';


interface IdProps {
    id: number;
  }

export const Admission: React.FC<IdProps> = ({ id }) => {
  
  const [doctor, setDoctor] = useState<DoctorProps>();
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const Today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(Today.getDate() + 7);

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

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (selectedOption: { label: string; value: string } | null) => {
    setSelectedTime(selectedOption?.value || null);
  };

  const generateTimeOptions = () => {
    const startTime = 10;
    const endTime = 18;
    const interval = 30;
    const timeOptions = [];

    for (let hour = startTime; hour < endTime; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const time = `${hour}:${minute === 0 ? '00' : minute}`;
        timeOptions.push({ label: time, value: time });
      }
    }

    return timeOptions;

  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!doctor) {
    return <div>Doctor not found</div>;
    
  }
  
  const timeOptions = generateTimeOptions();
  return (
    <div className={styles.card}>
      <div className={styles.info_doc}>
      <h2 className={styles.card_H2}>Запись на прием</h2>
      <h3>Врач: {`${doctor.surname} ${doctor.name}`}</h3>
      <p>Стаж работы: {doctor.experience} years</p>
      <p>Пост: {doctor.post}</p>
      <p>Специализация: {doctor.specName}</p>
      </div>
      <div>
      <label className={styles.label_card}>Дата:</label>
      <DatePicker
        className={styles.datePicker}
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={Today}
        maxDate={nextWeek}
      />
       </div>

      <div>
        <label className={styles.label_card}>Время:</label>
        <Select className={styles.sel} options={timeOptions} onChange={handleTimeChange} />
      </div>
      <Button appearance='primary'>Записаться</Button>
    </div>
  );
};

function setSelectedDate(date: Date | null) {
  throw new Error('Function not implemented.');
}

function setSelectedTime(arg0: string | null) {
  throw new Error('Function not implemented.');
}

