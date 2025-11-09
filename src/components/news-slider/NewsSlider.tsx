'use client';

import NewsCard from '@/components/news-card/NewsCard';
import Icon from '@/ui-kit/icon/Icon';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'برترین شبکه مخابراتی کشور در نشست',
    date: '10 آبان 1403',
    description:
      'شرکت فناوری و اطلاعات ناوکو بعنوان شرکت مادر تخصصی فناوری و نوآوری بانک',
    image: '/static/images/home/news.jpg',
  },
  {
    id: 2,
    title: 'افتتاح مرکز جدید R&D ناوکو',
    date: '02 آذر 1403',
    description:
      'این مرکز با هدف توسعه محصولات مبتنی بر زیرساخت و فین‌تک ایجاد شد.',
    image: '/static/images/home/news.jpg',
  },
  {
    id: 3,
    title: 'انتشار نسخه جدید پلتفرم معاملات آنلاین',
    date: '27 مهر 1403',
    description:
      'نسخه جدید دارای تجربه کاربری مدرن و عملکرد بهینه شده برای تریدرها است.',
    image: '/static/images/home/news.jpg',
  },
  {
    id: 4,
    title: 'انتشار نسخه جدید پلتفرم معاملات آنلاین',
    date: '27 مهر 1403',
    description:
      'نسخه جدید دارای تجربه کاربری مدرن و عملکرد بهینه شده برای تریدرها است.',
    image: '/static/images/home/news.jpg',
  },
  {
    id: 5,
    title: 'انتشار نسخه جدید پلتفرم معاملات آنلاین',
    date: '27 مهر 1403',
    description:
      'نسخه جدید دارای تجربه کاربری مدرن و عملکرد بهینه شده برای تریدرها است.',
    image: '/static/images/home/news.jpg',
  },
  {
    id: 6,
    title: 'انتشار نسخه جدید پلتفرم معاملات آنلاین',
    date: '27 مهر 1403',
    description:
      'نسخه جدید دارای تجربه کاربری مدرن و عملکرد بهینه شده برای تریدرها است.',
    image: '/static/images/home/news.jpg',
  },
  {
    id: 7,
    title: 'انتشار نسخه جدید پلتفرم معاملات آنلاین',
    date: '27 مهر 1403',
    description:
      'نسخه جدید دارای تجربه کاربری مدرن و عملکرد بهینه شده برای تریدرها است.',
    image: '/static/images/home/news.jpg',
  },
  {
    id: 8,
    title: 'انتشار نسخه جدید پلتفرم معاملات آنلاین',
    date: '27 مهر 1403',
    description:
      'نسخه جدید دارای تجربه کاربری مدرن و عملکرد بهینه شده برای تریدرها است.',
    image: '/static/images/home/news.jpg',
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function NewsSlider() {
  return (
    <>
      <h2 className='h2_black pb-12 pt-24 text-center text-stroke-static'>
        اخبار
      </h2>
      <div className='relative w-full' dir='rtl'>
        <button className='news-button-prev absolute right-[-60px] top-1/2 z-10 flex h-[56px] w-[56px] -translate-y-1/2 items-center justify-center rounded-full bg-button-tertiary'>
          <Icon
            name='arrow_right_2'
            classes='text-text-static lg:text-3xl text-2xl'
          />
        </button>
        <button className='news-button-next absolute left-[-60px] top-1/2 z-10 flex h-[56px] w-[56px] -translate-y-1/2 items-center justify-center rounded-full bg-button-tertiary'>
          <Icon
            name='arrow_left_2'
            classes='text-text-static lg:text-3xl text-2xl'
          />
        </button>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.news-button-next',
            prevEl: '.news-button-prev',
          }}
          slidesPerView={3}
          spaceBetween={2}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {newsData.map((item) => (
            <SwiperSlide
              key={item.id}
              className='mx-auto !flex !justify-center'
            >
              <NewsCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
