'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import useDeviceType from '@/hooks/useDeviceType';

import CardRoom from '@/components/card-room/CardRoom';

import Icon from '@/ui-kit/icon/Icon';
import Swiper from '@/ui-kit/swiper/Swiper';

interface TPropsTravelNests {
  label: string;
}

export const listRoom = [
  {
    id: 1,
    title: 'سوییت شماره ۳',
    price: 6000000,
    location: 'مشهد',
    count_room: 1,
    max_capacity: 4,
    images: [
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
    ],
  },
  {
    id: 2,
    title: 'سوییت شماره ۳',
    price: 6000000,
    location: 'مشهد',
    count_room: 1,
    max_capacity: 4,
    images: [
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
    ],
  },
  {
    id: 3,
    title: 'سوییت شماره ۳',
    price: 6000000,
    location: 'مشهد',
    count_room: 1,
    max_capacity: 4,
    images: [
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
      '/static/images/home/image-sample.jpeg',
    ],
  },
];

const TravelNests: FC<TPropsTravelNests> = ({ label }) => {
  const t = useTranslations('HomePage.main');
  const { isMobile, isTablet } = useDeviceType();

  return (
    <div className='mt-6 md:mt-10 lg:mt-20'>
      <div className='mb-4 flex justify-between'>
        <h5 className='t1_bold text-text-primary'>{`${t('travel_nests')} ${label}`}</h5>
        <Link
          href='/'
          className='b1_bold flex items-center gap-1 text-text-primary lg:text-t2_bold'
        >
          {t('view_all')}
          <Icon
            name='arrow_left'
            classes='text-stroke-tertiary text-xl lg:text-2xl'
          />
        </Link>
      </div>
      <div className='-ml-4 lg:ml-0'>
        <Swiper
          slidesPerView={isMobile ? 1.3 : isTablet ? 2.3 : 3}
          spaceBetween={16}
          className='gap-4 lg:grid lg:grid-cols-3'
        >
          {listRoom.map((room) => (
            <SwiperSlide key={room.id}>
              <CardRoom
                classNameImage='h-[140px] object-cover md:h-[180px] lg:h-[245px] lg:w-[378px]'
                width={378}
                height={245}
                {...room}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TravelNests;
