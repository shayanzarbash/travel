'use client';

import Image from 'next/image';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function CarSliderHero() {
  return (
    <div className='relative h-[560px] w-full overflow-hidden'>
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: '.custom-pagination',
        }}
        className='h-full w-full'
      >
        <SwiperSlide>
          <div className='container mx-auto flex h-full w-full items-center justify-between px-8'>
            <div className=''>
              <Image
                src='/static/images/home/car-1.png'
                alt='logo'
                width={377}
                height={377}
                className='object-contain'
              />
            </div>
            <div className='flex max-w-[600px] basis-[600px] flex-col items-baseline text-right'>
              <h2 className='text-[44px] font-bold leading-[90px] text-[#FF462D]'>
                سامانه معاینه فنی خودروهای
                <br /> سنگین و نیمه سنگین
              </h2>
              <button className='border-main back-linear-1 t1_bold_md hover:bg-white/10 mt-8 w-[220px] rounded-xl px-8 py-3 text-stroke-static backdrop-blur-md transition'>
                اطلاعات بیشتر
              </button>
            </div>
          </div>
          <div className='pointer-events-none absolute inset-0' />
        </SwiperSlide>
        <SwiperSlide>
          <div className='container mx-auto flex h-full w-full items-center justify-between px-8'>
            <div className=''>
              <Image
                src='/static/images/home/car-2.png'
                alt='logo'
                width={377}
                height={377}
                className='object-contain'
              />
            </div>
            <div className='flex max-w-[600px] basis-[600px] flex-col text-right'>
              <h2 className='text-[44px] font-bold leading-[90px] text-[#FF462D]'>
                سامانه پرداخت الکترونیکی عوارض
              </h2>
              <button className='back-linear-5 t1_bold_md border-white/30 hover:bg-white/10 mt-8 w-[220px] rounded-xl border px-8 py-3 text-stroke-static backdrop-blur-md transition'>
                اطلاعات بیشتر
              </button>
            </div>
          </div>
          <div className='pointer-events-none absolute inset-0' />
        </SwiperSlide>
      </Swiper>
      <div className='custom-pagination mt-6 flex justify-center' />
    </div>
  );
}
