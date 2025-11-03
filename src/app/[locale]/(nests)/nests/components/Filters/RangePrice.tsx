'use client';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Accordion from '@/ui-kit/accordion/Accordion';
import RangeSlider from '@/ui-kit/range-slider/RangeSlider';

const RangePriceSlider: FC = () => {
  const t = useTranslations('Nests');
  return (
    <Accordion label={t('range_price')}>
      <RangeSlider min={500000} max={100000000} onChange={() => {}} />
    </Accordion>
  );
};

export default RangePriceSlider;
