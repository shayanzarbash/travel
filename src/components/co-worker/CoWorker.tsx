import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Icon from '@/ui-kit/icon/Icon';

const newsData = [
  {
    id: 2,
    title: 'افتتاح مرکز جدید R&D ناوکو',
    image: '/static/images/home/r-3.png',
  },
  {
    id: 2,
    title: 'افتتاح مرکز جدید R&D ناوکو',
    image: '/static/images/home/r-2.png',
  },
  {
    id: 3,
    title: 'افتتاح مرکز جدید R&D ناوکو',
    image: '/static/images/home/r-3.png',
  },
  {
    id: 4,
    title: 'افتتاح مرکز جدید R&D ناوکو',
    image: '/static/images/home/r-4.png',
  },
  {
    id: 5,
    title: 'افتتاح مرکز جدید R&D ناوکو',
    image: '/static/images/home/r-5.png',
  },
  {
    id: 6,
    title: 'افتتاح مرکز جدید R&D ناوکو',
    image: '/static/images/home/r-4.png',
  },
  {
    id: 7,
    title: 'افتتاح مرکز جدید R&D ناوکو',
    image: '/static/images/home/r-3.png',
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function CoWorkerSlider() {
  return (
    <>
      <h2 className='h2_black pb-20 pt-32 text-center text-stroke-static'>
        همکاران ما
      </h2>
      <div className='relative w-full px-6' dir='rtl'>
        <button className='swiper-button-prev absolute right-[-60px] top-1/2 z-10 flex h-[56px] w-[56px] -translate-y-1/2 items-center justify-center rounded-full bg-button-tertiary'>
          <Icon
            name='arrow_right_2'
            classes='text-text-static lg:text-3xl text-2xl'
          />
        </button>
        <button className='swiper-button-next absolute left-[-60px] top-1/2 z-10 flex h-[56px] w-[56px] -translate-y-1/2 items-center justify-center rounded-full bg-button-tertiary'>
          <Icon
            name='arrow_left_2'
            classes='text-text-static lg:text-3xl text-2xl'
          />
        </button>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          slidesPerView={5}
          spaceBetween={32}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 5 },
          }}
        >
          {newsData.map((item) => (
            <SwiperSlide
              key={item.id}
              className='mx-auto !flex !justify-center'
            >
              <Image
                src={item.image}
                alt={item.title}
                width={160}
                height={160}
                className='object-contain'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
