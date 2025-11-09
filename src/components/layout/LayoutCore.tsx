'use client';

import { FC, ReactNode } from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

const LayoutCore: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-background-1'>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutCore;
