import { useTranslations } from 'next-intl';

import Button from '@/ui-kit/button/Button';
import Price from '@/ui-kit/price/Price';

const item = {
  numberOfNights: '3 شب',
  costPerNight: 6000000,
  priceWholeNight: 18000000,
  numberAdditionalPeople: '۲ نفر اضافه',
  priceNumberAdditional: 1000000,
  wholePriceNumberAdditional: 2000000,
  wholePrice: 20000000,
};

export default function PaymentInformation(): JSX.Element {
  const t = useTranslations('Profile');

  return (
    <>
      <div className='flex flex-col items-baseline justify-start pt-2 sm:items-start lg:pt-3.5'>
        <div className='flex w-full flex-row justify-between'>
          <div className='flex items-baseline sm:items-end'>
            <h6 className='b2_regular pl-1 text-stroke-secondary'>
              {item.numberOfNights}
            </h6>
            <span className='text-stroke-secondary'>×</span>
            <Price
              className='b2_regular pr-1 text-stroke-secondary'
              amount={item.costPerNight}
              classNameUnit='!b2_regular !text-stroke-secondry'
            />
          </div>
          <Price
            amount={item.priceWholeNight}
            className='b2_regular pr-1 text-stroke-tertiary'
            classNameUnit='!b2_regular text-stroke-tertiary'
          />
        </div>
      </div>
      <div className='flex w-full flex-row justify-between pt-0.5 lg:pt-2.5'>
        <div className='flex items-baseline sm:items-end'>
          <h6 className='b2_regular pl-1 text-stroke-secondary'>
            {item.numberAdditionalPeople}
          </h6>
          <span className='text-stroke-secondary'>×</span>
          <Price
            className='b2_regular pr-1 text-stroke-secondary'
            amount={item.priceNumberAdditional}
            classNameUnit='!b2_regular !text-stroke-secondry'
          />
        </div>
        <Price
          amount={item.wholePriceNumberAdditional}
          className='b2_regular pr-1 text-stroke-tertiary'
          classNameUnit='!b2_regular text-stroke-tertiary'
        />
      </div>
      <div className='hidden w-full justify-between pb-2.5 pt-4 lg:flex'>
        <h6 className='b1_bold text-stroke-secondary'>{t('total_price')}</h6>
        <Price
          amount={item.wholePrice}
          className='!t1_bold pr-1 text-2xl text-stroke-tertiary'
          classNameUnit='!b2_regular !text-stroke-secondry'
        />
      </div>
      <Button className='b2_bold m-auto flex !bg-background-2 pb-1.5 pt-2.5 text-error lg:pb-3'>
        {t('cancel_reservation')}
      </Button>
      <Button
        className='b1_bold hidden w-full py-3 lg:block'
        typeColor='success'
      >
        {t('payment_cash')}
      </Button>
    </>
  );
}
