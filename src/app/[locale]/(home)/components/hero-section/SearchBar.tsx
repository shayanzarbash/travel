'use client';

import { useTranslations } from 'next-intl';
import { FC, useRef } from 'react';

import useDeviceType from '@/hooks/useDeviceType';

import Select from '@/app/[locale]/(home)/components/hero-section/Select';
import DatePickerTwoDate from '@/ui-kit/date-picker/DatePickerTwoDate';
import Icon from '@/ui-kit/icon/Icon';
import NumberStepper from '@/ui-kit/number-stepper/NumberStepper';

const breakerStyle =
  'border-l border-stroke-primary md:block lg:block hidden lg:my-3 md:my-2';

const SearchBar: FC = () => {
  const t = useTranslations('HomePage.hero_section');
  const { isMobile } = useDeviceType();

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onClick={() => {
        !isMobile && ref.current?.scrollIntoView({ behavior: 'smooth' });
      }}
      className='relative mt-20 flex w-full scroll-mt-[130px] flex-col items-stretch justify-between gap-3 rounded-2xl bg-background-2 p-3 md:mt-0 md:flex-row md:gap-0 md:p-2 md:!pr-0 lg:mt-0 lg:gap-0 lg:rounded-3xl lg:!pr-0'
    >
      <div className='flex flex-1 flex-col justify-between gap-3 md:h-[48px] md:flex-row md:gap-6 md:pl-4 lg:my-3 lg:h-[52px] lg:gap-8 lg:pl-8'>
        <Select
          options={cities}
          className='md:pr-4 lg:pr-6'
          label={t('travel_nest')}
        />
        <div className={breakerStyle} />
        <DatePickerTwoDate label={t('date')} />
        <div className={breakerStyle} />
        <NumberStepper
          isBottomSheet
          labelValue={t('person')}
          label={t('total_people')}
          maxNumber={50}
        />
      </div>

      <button className='flex items-center justify-center rounded-lg bg-stroke-tertiary py-3 text-center text-2xl text-b2_bold text-text-static md:px-8 md:py-0 lg:rounded-2xl lg:px-7 lg:py-0 lg:text-3xl'>
        {
          //todo use ui-kit
          isMobile ? (
            t('search')
          ) : (
            <Icon
              name='search'
              classes='text-text-static lg:text-3xl text-2xl'
            />
          )
        }
      </button>
    </div>
  );
};

export default SearchBar;

const ChildCity: FC = () => (
  <Icon
    name='pin'
    classes='text-xl text-stroke-secondary lg:hidden md:hidden'
  />
);

const cities = [
  {
    title: 'مشهد مقدس',
    value: 1,
    children: ChildCity,
  },
  {
    title: 'جزیره کیش',
    value: 2,
    children: ChildCity,
  },
  {
    title: 'رامسر',
    value: 3,
    children: ChildCity,
  },
];
