import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './global.css';
import {Footer, Header, MenuAdmin } from '../../components';
import styles from '../(admin)/layout.module.css';
import router from 'next/router';

const inte = Noto_Sans({
  subsets: ["cyrillic"],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Hospital',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inte.className}>
        <div className={styles.wrapper}>
          <Header className={styles.header} />
          <div className={styles.body}>
            {children}
          </div>
          
      </div>
    </body>
  </html>
  )
}
