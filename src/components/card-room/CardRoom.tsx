import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import { cn } from '@/libs/utils';

import Icon from '@/ui-kit/icon/Icon';
import { TListIcon } from '@/ui-kit/icon/Icon.types';
import Price from '@/ui-kit/price/Price';
import Swiper from '@/ui-kit/swiper/Swiper';

interface TPropsCardRoom {
  id: number;
  title: string;
  price: number;
  location: string;
  count_room: number;
  max_capacity: number;
  images: string[];
  width: number;
  height: number;
  classNameImage?: string;
}

interface TDetailItem {
  icon: TListIcon;
  text: string;
  className?: string;
}

const DetailItem: FC<TDetailItem> = ({ icon, text, className }) => (
  <div className={cn('relative flex items-center gap-1', className)}>
    <div className='circle absolute -right-3 top-1/2 h-1 w-1 -translate-y-1/2 transform rounded-full bg-stroke-orange' />
    <Icon name={icon} classes='text-stroke-secondary text-lg lg:text-xl' />
    <h6 className='b2_regular text-text-secondary'>{text}</h6>
  </div>
);

const CardRoom: FC<TPropsCardRoom> = ({
  title,
  price,
  location,
  count_room,
  max_capacity,
  images,
  width,
  height,
  classNameImage,
}) => {
  const t = useTranslations('HomePage.main');
  return (
    <div className='b1_bold rounded-xl bg-background-2 p-2 md:rounded-2xl lg:rounded-[20px] lg:p-3'>
      <Swiper
        navigation
        slidesPerView={1}
        className='overflow-hidden rounded-lg lg:rounded-xl'
        pagination={{
          clickable: true,
          dynamicMainBullets: 3,
          dynamicBullets: true,
        }}
      >
        {images.map((imageItem, index) => (
          <SwiperSlide key={`${imageItem}-${index}`}>
            <div className='relative overflow-hidden rounded-lg lg:rounded-xl'>
              <Image
                src={imageItem}
                width={width}
                className={classNameImage}
                height={height}
                alt={title}
              />
              <div className='absolute bottom-0 left-0 right-0 top-0 bg-image_card' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='mb-3 mt-4 flex items-center justify-between lg:mb-4 lg:mt-6'>
        <h6 className='b1_bold text-text-primary'>{title}</h6>
        <Price
          amount={price}
          prefix={
            <span className='b2_regular text-text-tertiary'>{t('from')}</span>
          }
        />
      </div>
      <div className='flex items-center gap-5 lg:gap-7 [&>div:first-child>.circle]:hidden'>
        <DetailItem icon='pin' text={location} />
        <DetailItem icon='door' text={`${count_room} ${t('room')}`} />
        <DetailItem
          icon='user'
          text={t('capacity').replace('0', `${max_capacity}`)}
        />
      </div>
    </div>
  );
};

export default CardRoom;
