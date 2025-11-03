'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import useDeviceType from '@/hooks/useDeviceType';

import { useModalStore } from '@/store/modal-store';

import ImagePreview from '@/app/[locale]/(nests)/nests/components/ImagePreview/ImagePreview';
import mocks from '@/app/[locale]/(nests)/nests/detail/mocks';
import Icon from '@/ui-kit/icon/Icon';
import Swiper from '@/ui-kit/swiper/Swiper';

const Images: FC = () => {
  const { isDesktop } = useDeviceType();
  const t = useTranslations('Detail');
  const { openModal } = useModalStore();

  const onOpen = (): void => {
    openModal({
      title: t('image_suit'),
      className: '!w-[960px]',
      children: <ImagePreview />,
    });
  };

  return isDesktop ? (
    <div className='grid grid-cols-2 gap-2 overflow-hidden rounded-2xl'>
      <Image
        alt='room-1'
        className='h-[560px] object-cover'
        src='/static/images/mock/room-1.jpg'
        width={618}
        height={560}
        onClick={onOpen}
      />
      <div className='gird-cols-2 grid gap-2'>
        <Image
          height={616}
          width={312}
          src='/static/images/mock/room-3.jpeg'
          className='col-span-2 h-[312px] w-full object-cover'
          alt='room-2'
          onClick={onOpen}
        />
        <Image
          height={240}
          width={304}
          src='/static/images/mock/room-2.jpg'
          className='h-[240px] object-cover'
          alt='room-2'
          onClick={onOpen}
        />
        <div className='relative h-[240px]'>
          <div className='absolute bottom-0 left-0 right-0 top-0 flex cursor-pointer items-center justify-center bg-image_card_2'>
            <h6 className='b2_bold flex items-center gap-1 text-text-static'>
              {t('all_view_images')}

              <Icon name='arrow_left' classes='text-2xl' />
            </h6>
          </div>
          <Image
            height={240}
            className='h-[240px] object-cover'
            width={304}
            src='/static/images/mock/room-2.jpg'
            alt='room-2'
            onClick={onOpen}
          />
        </div>
      </div>
    </div>
  ) : (
    <Swiper
      navigation
      pagination={{
        clickable: true,
        dynamicMainBullets: 3,
        dynamicBullets: true,
      }}
      className='mb-4 rounded-lg md:rounded-2xl'
    >
      {mocks.images.map((image_item) => (
        <SwiperSlide key={image_item}>
          <Image
            width={728}
            height={415}
            src={image_item}
            alt=''
            className='h-[164px] object-cover md:h-[415px]'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Images;
