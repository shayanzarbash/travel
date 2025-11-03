import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { cn } from '@/libs/utils';

import FilterChecked from '@/app/[locale]/(nests)/nests/components/Filters/FilterChecked';
import RangePrice from '@/app/[locale]/(nests)/nests/components/Filters/RangePrice';
import SelectDate from '@/app/[locale]/(nests)/nests/components/Filters/SelectDate';
import TotalPeople from '@/app/[locale]/(nests)/nests/components/Filters/TotalPeople';
import Button from '@/ui-kit/button/Button';

const mockDataCities = [
  {
    title: 'مشهد مقدس',
    total: 4,
  },
  {
    title: 'جزیره کیش',
    total: 4,
  },
  {
    title: 'رامسر',
    total: 4,
  },
];

const mockDataBeds = [
  {
    title: '۲ تخت',
    total: 4,
  },
  {
    title: '۳ تخت',
    total: 4,
  },
];

interface TPropsFilters {
  desktopMode?: boolean;
}

const Filters: FC<TPropsFilters> = ({ desktopMode }) => {
  const t = useTranslations('Nests');

  return (
    <div
      className={cn(
        'min-w-[312px] flex-col rounded-[20px] bg-background-2 lg:flex lg:p-6',
        desktopMode && 'hidden',
      )}
    >
      <div className='hidden w-full items-center justify-between pb-8 lg:flex'>
        <h5 className='t2_bold text-text-primary'>{t('filters')}</h5>
        <h6 className='c1_bold cursor-pointer text-error'>
          {t('remove_filter')}
        </h6>
      </div>
      <div
        className={cn(
          'flex flex-col',
          'gap-4 lg:gap-8 [&>div]:pb-4 [&>div]:lg:pb-8',
          '[&>div]:border-b [&>div]:border-stroke-primary last:[&>div]:border-0 last:[&>div]:pb-0',
        )}
      >
        <FilterChecked
          label={t('city')}
          list={mockDataCities.map((cityItem) => ({
            title: cityItem.title,
            suffix: `${cityItem.total} ${t('nest')}`,
          }))}
        />
        <SelectDate />
        <TotalPeople />
        <FilterChecked
          label={t('total_bed')}
          list={mockDataBeds.map((bedItem) => ({
            title: bedItem.title,
            suffix: `${bedItem.total} ${t('nest')}`,
          }))}
        />
        <RangePrice />
      </div>

      <div className='mt-6 flex flex-col items-center gap-1 md:grid md:grid-cols-2 lg:hidden'>
        <Button
          typeColor='secondary'
          className='!border-transparent !text-error'
        >
          {t('remove_all_filter')}
        </Button>
        <Button>{t('approve_filter')}</Button>
      </div>
    </div>
  );
};

export default Filters;
