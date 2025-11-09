'use client';

import AboutCompany from '@/components/about-company/AboutCompany';
import AcademyCenter from '@/components/academy-center/AcademyCenter';
import ScrollIndicator from '@/components/arrow/Arrow';
import RightSideTabs from '@/components/bnak-service/BankService';
import CarSliderHero from '@/components/car-slider/CarsliderHero';
import NewsSlider from '@/components/news-slider/NewsSlider';
import OrbitalSystem from '@/components/orbit-system/OrbitalSystem';
import Support from '@/components/support/Support';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import CoWorkerSlider from '@/components/co-worker/CoWorker';
import AccordionSection from '@/components/faq-section/FaqSection';

const Main: FC = () => {
  const t = useTranslations('HomePage');
  return (
    <section>
      <div className='star_container pb-12 pt-10 md:pb-16 lg:pb-[7.5rem] lg:pt-20'>
        <AboutCompany />
        <OrbitalSystem />
        <ScrollIndicator />
        <AcademyCenter />
        <RightSideTabs />
      </div>
      <div className='back-linear-4'>
        <CarSliderHero />
      </div>
      <div className='star_container pb-12 pt-10 md:pb-16 lg:pb-[7.5rem] lg:pt-20'>
        <Support />
        <NewsSlider />
        <CoWorkerSlider />
        <AccordionSection />
      </div>
    </section>
  );
};

export default Main;
