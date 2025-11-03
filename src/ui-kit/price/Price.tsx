import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

import { separator } from '@/libs/formatter';
import { cn } from '@/libs/utils';

interface TPropsPrice {
  amount: number;
  unit?: 'TOMAN' | 'RIAL';
  className?: string;
  classNameUnit?: string;
  prefix?: React.ReactNode;
}

const helperUnit = {
  TOMAN: 'toman',
  RIAL: 'rial',
};

const Price: FC<TPropsPrice> = ({
  amount,
  className,
  classNameUnit,
  unit = 'TOMAN',
  prefix,
}) => {
  const t = useTranslations('Global');
  return (
    <div className='flex items-center gap-1'>
      {prefix}
      <h6 className={cn('b1_bold text-text-primary', className)}>
        {separator(amount)}
      </h6>
      <span className={cn('b2_regular text-text-tertiary', classNameUnit)}>
        {t(helperUnit[unit])}
      </span>
    </div>
  );
};

export default Price;
