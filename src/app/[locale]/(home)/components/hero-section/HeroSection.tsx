import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const HeroSection: FC = () => {
  const t = useTranslations('HomePage');

  return (
    <section className='star_container max-w-screen relative mb-[1rem] md:mb-0'>
      <div className='absolute left-0 right-0 top-[120px] flex'>
        <div className='scan-line w-[555px]'></div>
      </div>
      <div className='absolute left-0 right-0 top-[312px] flex'>
        <div className='scan-line w-[677px]'></div>
      </div>
      <div className='absolute left-0 right-0 top-[366px] flex'>
        <div className='scan-line w-[677px]'></div>
      </div>
      <div className='absolute left-0 right-0 top-[484px] flex'>
        <div className='scan-line w-[677px]'></div>
      </div>

      <div className='relative flex items-center justify-center'>
        <div
          className='relative z-10 flex w-full flex-col items-center justify-between bg-hero_pattern bg-cover md:flex-row'>
          <div className='flex flex-col gap-[7rem] space-y-6 pt-5 text-right sm:items-center md:items-end'>
            <h2 className='h1_bold leading-tight text-stroke-static'>
              شرکت فناوری اطلاعات ناواکو
            </h2>
            <p className='h2_bold text-left leading-relaxed text-stroke-static'>
              پیشرو در نوآوری‌های فناورانه
            </p>
          </div>
          <div className='relative'>
            <div className='w-664 h-664 md:w-664 md:w-664 ml-0 md:ml-[-40px] earth'>
              <Image
                src='/static/images/home/image-28.svg'
                alt='Digital Globe'
                width={664}
                height={664}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
