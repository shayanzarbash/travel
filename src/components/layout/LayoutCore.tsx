'use client';

import { FC, ReactNode } from 'react';

import useDeviceType from '@/hooks/useDeviceType';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

import { usePathname } from '@/navigation';
import Modal from '@/ui-kit/modal/Modal';

const LayoutCore: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const { isDesktop } = useDeviceType();
  const hiddenFooter =
    pathname?.startsWith('/auth') || (!isDesktop && pathname !== '/');

  const hiddenHeader = pathname?.startsWith('/auth');

  return (
    <>
      {!hiddenHeader && <Header />}
      <main className='min-h-screen bg-background-1'>{children}</main>
      {!hiddenFooter && <Footer />}
      <Modal />
    </>
  );
};

export default LayoutCore;
