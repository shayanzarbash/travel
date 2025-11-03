'use client';

import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper as SwiperCore, SwiperProps } from 'swiper/react';

import { cn } from '@/libs/utils';

type TPropsSwiper = SwiperProps;

const Swiper: FC<TPropsSwiper> = ({ children, className, ...props }) => (
  <SwiperCore
    {...props}
    modules={[Navigation, Pagination, FreeMode, Thumbs]}
    className={cn(
      '[&>.swiper-button-disabled]:!bg-background-2 [&>[class^=swiper-button]]:bottom-0 [&>[class^=swiper-button]]:top-0 [&>[class^=swiper-button]]:my-auto',
      '[&>[class^=swiper-button]]:lg:h-8 [&>[class^=swiper-button]]:lg:w-8',
      '[&>[class^=swiper-button]]:h-6 [&>[class^=swiper-button]]:w-6',
      '[&>[class^=swiper-button]]:rounded-full [&>[class^=swiper-button]]:bg-background-2',
      '[&>.swiper-button-disabled]:!opacity-60',
      className,
    )}
  >
    {children}
  </SwiperCore>
);

export default Swiper;
