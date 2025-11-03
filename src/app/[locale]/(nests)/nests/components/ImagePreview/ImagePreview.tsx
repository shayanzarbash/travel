'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import { cn } from '@/libs/utils';

import mocks from '@/app/[locale]/(nests)/nests/detail/mocks';
import Swiper from '@/ui-kit/swiper/Swiper';

const ImagePreview: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        navigation
        pagination={{
          clickable: true,
          dynamicMainBullets: 3,
          dynamicBullets: true,
        }}
        className='mb-4 rounded-xl'
        thumbs={{ swiper: thumbsSwiper }}
      >
        {mocks.images.map((image_item) => (
          <SwiperSlide key={image_item}>
            <Image
              width={728}
              height={415}
              src={image_item}
              alt=''
              className='h-[500px] w-full object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='-ml-5'>
        <Swiper
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          spaceBetween={16}
          slidesPerView={5.2}
          freeMode
          centeredSlides
          centeredSlidesBounds
          className={cn(
            '[&>div>.swiper-slide-thumb-active>img]:!border-stroke-tertiary [&>div>.swiper-slide>img]:border-[2px] [&>div>.swiper-slide>img]:border-transparent',

            '!pl-5',
          )}
        >
          {mocks.images.map((image_item) => (
            <SwiperSlide key={image_item}>
              <Image
                width={160}
                height={120}
                src={image_item}
                alt=''
                className='w-full cursor-pointer rounded-xl object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImagePreview;
