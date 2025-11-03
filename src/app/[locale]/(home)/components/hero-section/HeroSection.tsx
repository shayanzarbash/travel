import { useTranslations } from 'next-intl';
import { FC } from 'react';

import SearchBar from '@/app/[locale]/(home)/components/hero-section/SearchBar';

const HeroSection: FC = () => {
  const t = useTranslations('HomePage');

  return (
    <section className='max-w-screen mb-[7rem] h-[282px] bg-hero_pattern pt-6 md:mb-0 md:h-[400px] md:pb-6 lg:mb-0 lg:h-[640px] lg:pb-10 lg:pt-[88px]'>
      <div className='star_container flex h-full flex-col items-center justify-between md:px-16 lg:max-w-[818px] lg:px-0'>
        <div className='flex w-full flex-col items-center justify-between'>
          <div className='flex w-full items-center gap-4 lg:w-max'>
            <div className='h-[2px] w-full rounded-xl bg-text-orange lg:w-[120px]' />
            <h2 className='text-t1_bold_sm text-text-static md:text-t1_bold_md lg:text-h2_bold'>
              {t('hero_section.title_1')}
            </h2>
            <div className='h-[2px] w-full rounded-xl bg-text-orange lg:w-[120px]' />
          </div>
          <h1 className='h1_black text-center text-text-static'>
            {t('hero_section.title_2')}
          </h1>
        </div>
        <SearchBar />
      </div>
    </section>
  );
};

export default HeroSection;
