import styles from './MenuAdmin.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { MenuAdminProps } from './MenuAdmin.props';



export const MenuAdmin = ({className, ...props}: MenuAdminProps) => {
  
  return (
    <div  className={styles.container}>
        <span
          className={styles.selectedItem}>
          <Link href="/doctorAdmin"> 
          Врачи
          </Link>
        </span>
        
        
        <span
          className={styles.selectedItem}>
          <Link href="/servicAdmin"> 
          Услуги
          </Link>
        </span>
    </div>
  );
};