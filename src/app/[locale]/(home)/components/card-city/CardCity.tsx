'use client';

import Image from 'next/image';
import { FC } from 'react';

import useDeviceType from '@/hooks/useDeviceType';
import { cn } from '@/libs/utils';

import { fontRavi } from '@/styles/fonts';

interface TPropsCardCity {
  title: string;
  img_src: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  className?: string;
}

const CardCity: FC<TPropsCardCity> = ({ title, img_src, className }) => {
  const { isMobile, isTablet } = useDeviceType();

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl md:rounded-2xl',
        className,
      )}
    >
      <Image
        src={
          isMobile
            ? img_src.mobile
            : isTablet
              ? img_src.tablet
              : img_src.desktop
        }
        alt={title}
        width={1240}
        height={320}
        className='h-full w-full object-cover lg:h-full lg:w-full'
      />
      <div className='bg-custom-gray backdrop-blur-12px absolute bottom-0 left-0 right-0 flex w-screen items-center py-2 bg-blend-luminosity lg:py-6'>
        <h6
          className={`px-4 text-t1_bold font-bold text-text-static md:text-t1_bold lg:px-5 lg:text-[40px] ${fontRavi.className}`}
        >
          {title}
        </h6>
      </div>
    </div>
  );
};

export default CardCity;
