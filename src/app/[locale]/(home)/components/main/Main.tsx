import { useTranslations } from 'next-intl';
import { FC } from 'react';

import TravelNests from '@/components/travel-nests/TravelNests';

import CardCity from '@/app/[locale]/(home)/components/card-city/CardCity';

const citiesBanner = [
  {
    title: 'mashhad',
    img_src: {
      desktop: '/static/images/home/mashhad.jpg',
      tablet: '/static/images/home/mashhad.jpg',
      mobile: '/static/images/home/mashhad-m.jpg',
    },
    className: 'md:col-span-2 lg:col-span-2',
  },
  {
    title: 'kish',
    img_src: {
      desktop: '/static/images/home/kish.jpg',
      tablet: '/static/images/home/kish.jpg',
      mobile: '/static/images/home/kish-m.jpg',
    },
  },
  {
    title: 'ramsar',
    img_src: {
      desktop: '/static/images/home/ramsar.jpg',
      tablet: '/static/images/home/ramsar.jpg',
      mobile: '/static/images/home/ramsar-m.jpg',
    },
  },
];

const Main: FC = () => {
  const t = useTranslations('HomePage');
  return (
    <section className='star_container pb-12 pt-10 md:pb-16 lg:pb-[7.5rem] lg:pt-20'>
      <div className='grid grid-cols-1 gap-4 !pb-4 md:grid-cols-2 md:pb-0 lg:grid-cols-2'>
        {citiesBanner.map((city) => (
          <CardCity
            key={city.title}
            {...city}
            title={t(`main.${city.title}`)}
          />
        ))}
      </div>
      <TravelNests label={t('main.mashhad_2')} />
      <TravelNests label={t('main.kish_2')} />
      <TravelNests label={t('main.ramsar_2')} />
    </section>
  );
};

export default Main;
