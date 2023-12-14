import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext, useState,useEffect } from 'react';
import  { Specialization } from '../../interfaces/menu.interface';
import Link from 'next/link';
import router, { useRouter } from 'next/router';


export const Menu = () => {
  const [specializations, setSpecializations] = useState<Specialization[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState<string | null>(null);
  const [doctors, setDoctors] = useState([]);
  

  useEffect(() => {
    // Fetch data from the API
    fetch('https://localhost:7138/api/specializations')
      .then(response => response.json())
      .then((data: Specialization[]) =>{
        console.log('Received data:', data);
        setSpecializations(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCategoryClick = (specializationId: number) => {
    setSelectedCategory(prevCategory => (prevCategory === specializationId ? null : specializationId));
  };

  const handleSpecClick = (specialName:string) => {
    setSelectedSpecialization((prevValue) => (prevValue === specialName ? null : specialName));
  
    // router.push(`/doctors?specialization=${encodeURIComponent(specialName)}`);
  
  }; 


  return (
    <div className={styles.container}>
      
      <span
          className={styles.selectedItem}
          onClick={() => handleCategoryClick(0)}>
          Врачи
          
        </span>
      
        {selectedCategory === 0 && (
          <ul>
            {specializations.map(specialization => (
              <li className={styles.secondLevel} key={specialization.specializationId}>
                
                <Link href={`/doctors/${encodeURIComponent(specialization.specialName)}`}>
                <span
                  className={cn(styles.menuItem, { [styles.selectedItem]: selectedCategory === specialization.specializationId })}
                  onClick={() => handleSpecClick(specialization.specialName)}>
                  {specialization.specialName}
                </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
    
    
        <span
          className={styles.selectedItem}>
          <Link href="/servic"> 
          Услуги
          </Link>
        </span>
        
        
        <span
          className={styles.selectedItem}>
          <Link href="/medCard"> 
          Мед Карта
          </Link>
        </span>
    </div>
  );
};