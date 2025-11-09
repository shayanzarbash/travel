'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import DropdownMenu from '@/components/header/DropDown';

const Header: FC = () => {
  return (
    <header className='bg-background-2 py-2 lg:py-5'>
      <div className='star_container relative flex items-center justify-between'>
        <Link href='https://www.navaco.ir/'>
          <Image
            src='/static/images/header/logo-m.svg'
            alt='logo'
            width={146}
            height={72}
            className='h-[32px] w-[100px] lg:h-[72px] lg:w-[146px]'
          />
        </Link>
        <nav className='flex items-center gap-[70px]'>
          <DropdownMenu />
        </nav>
        <div className='flex flex-row-reverse'>
          <Link href={'###'} className='flex flex-row-reverse'>
            <h3 className='t2_regular pr-4 text-stroke-static'>تماس با ما</h3>
            <Image
              src='/static/images/header/call-calling.svg'
              alt='logo'
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

