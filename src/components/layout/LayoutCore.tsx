'use client';

import { FC, ReactNode } from 'react';

import useDeviceType from '@/hooks/useDeviceType';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

import { usePathname } from '@/navigation';
import Modal from '@/ui-kit/modal/Modal';

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
