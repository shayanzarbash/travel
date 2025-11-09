import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import EventCard from '@/components/event-card/EventCard';
import LatestNews from '@/components/latest-news/LatestNews';
import Image from 'next/image';

const data = [
  {
    title: 'نشست شرکت فناوری اطلاعات ناواکو و صنایع غرب تهران',
    img: '/static/images/home/news.jpg',
  },
  {
    title: 'نشست شرکت فناوری اطلاعات ناواکو و صنایع غرب تهران',
    img: '/static/images/home/news.jpg',
  },
  {
    title: 'نشست شرکت فناوری اطلاعات ناواکو و صنایع غرب تهران',
    img: '/static/images/home/news.jpg',
  },
  {
    title: 'نشست شرکت فناوری اطلاعات ناواکو و صنایع غرب تهران',
    img: '/static/images/home/news.jpg',
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function News() {
  return (
    <>
      <div>
        <div className='star_container lg:pb-[120px]'>
          <Breadcrumb />

          <div className='text-white back-linear-3 mt-2 flex flex-col justify-between rounded-[24px] p-8 pb-8 pl-8 pr-8 pt-8'>
            <div>
              <h2 className='h2_black pb-7 text-stroke-static'>اخبار ما</h2>
              <div className='border-static mb-10 border-b border-background-3 opacity-20' />
              <div className='px-2 py-2'>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2'>
                  <div className='before-shadow relative lg:row-span-2'>
                    <Image
                      src={data[1].img}
                      alt=''
                      width={468}
                      height={468}
                      className='h-full w-full rounded-[16px] object-cover'
                    />
                    <h3 className='t1_bold absolute bottom-4 right-4 text-stroke-static'>
                      نشست شرکت فناوری اطلاعات ناواکو و صنایع غرب تهران
                    </h3>
                  </div>
                  {data.map((item, i) => (
                    <EventCard key={i} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='pt-28'>
            <h2 className='h2_black pb-16 text-center text-stroke-static'>
              جدیدترین‌ها
            </h2>
            <LatestNews />
          </div>
        </div>
      </div>
    </>
  );
}
