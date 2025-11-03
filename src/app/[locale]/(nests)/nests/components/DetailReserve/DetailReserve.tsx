import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import Icon from '@/ui-kit/icon/Icon';
import NumberStepper from '@/ui-kit/number-stepper/NumberStepper';
import Price from '@/ui-kit/price/Price';

interface TPropsDetailReserve {
  classNameCard: string;
}

const DetailReserve: FC<TPropsDetailReserve> = ({ classNameCard }) => {
  const t = useTranslations('Detail');
  const [total, onChangeTotal] = useState(1);

  return (
    <>
      <div className={classNameCard}>
        <div className='flex items-start justify-between'>
          <h6 className='b1_bold text-stroke-secondary'>
            {t('entrance_and_leaving_date')}:
          </h6>
          <h6 className='c1_bold text-stroke-secondary'>۳ {t('night')}</h6>
        </div>
        <div className='flex items-center justify-between'>
          <h6 className='b2_bold lg:b1_bold flex items-center gap-1 text-text-primary'>
            ۱۱ تیر{' '}
            <Icon name='arrow_left_2' classes='text-2xl text-text-primary' /> ۱۵
            تیر
          </h6>
          <h6 className='c1_bold cursor-pointer text-text-orange'>
            {t('edit')}
          </h6>
        </div>
      </div>
      <div className={classNameCard}>
        <div className='flex items-start justify-between'>
          <h6 className='b1_bold text-stroke-secondary'>
            {t('total_people')}:
          </h6>
          <h6 className='c1_bold text-stroke-secondary'>
            {total} {t('person')}
          </h6>
        </div>
        <div className='flex items-center justify-between'>
          <NumberStepper
            className='!w-full justify-between'
            labelValue={`${t('person')}`}
            initialValue={total}
            handleChange={(e) => onChangeTotal(e.value)}
          />
        </div>
      </div>
      <div className='flex justify-between lg:mb-20'>
        <h6 className='b2_regular flex items-center gap-1 text-text-secondary'>
          ۳{t('night')} ×
          <Price
            amount={6000000}
            className='b2_regular'
            classNameUnit='!text-b2_reqular !text-text-secondary'
          />{' '}
        </h6>
        <Price
          amount={180000000}
          className='b2_regular'
          classNameUnit='!text-b2_reqular !text-text-primary'
        />
      </div>
    </>
  );
};

export default DetailReserve;
