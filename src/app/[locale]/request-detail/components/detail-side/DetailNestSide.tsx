'use client';

import { useTranslations } from 'next-intl';

import useDeviceType from '@/hooks/useDeviceType';

import NestArrivalDate from '@/app/[locale]/request-detail/components/detail-side/components/nest-arrival-date/NestArrivalDate';
import BrokerName from '@/app/[locale]/request-detail/components/detail-side/components/nest-broker-name/BrokerName';
import NestInformation from '@/app/[locale]/request-detail/components/detail-side/components/nest-information/NestInformation';
import NestNumberPeople from '@/app/[locale]/request-detail/components/detail-side/components/nest-number-people/NestNumberPeople';
import PaymentInformation from '@/app/[locale]/request-detail/components/detail-side/components/nest-payment/DetailPayment';
import Button from '@/ui-kit/button/Button';
import Price from '@/ui-kit/price/Price';

const item = {
  nestName: 'مشهد سوییت شماره ۳',
  link: '/nests/detail',
  status: 'در انتظار پرداخت',
  NameBooker: 'سید مهدی احمدی زاده',
  numberBooker: '۴ نفر + ۲ نفر اضافه',
  arrivalDate: '۲۷ تیر',
  departureDate: '۳۰ تیر',
  wholePriceNumberAdditional: 2000000,
};

export default function DetailNestSide(): JSX.Element {
  const t = useTranslations('Profile');
  const { isDesktop } = useDeviceType();

  return (
    <div className='w-full rounded-lg bg-background-2 p-4 lg:min-w-[400px] lg:rounded-[20px] lg:p-6'>
      <div>
        <NestInformation
          status={item.status}
          nameNest={item.nestName}
          link={item.link}
        />
        <BrokerName name={item.NameBooker} />
        <NestNumberPeople numberBooker={item.numberBooker} />
        <NestArrivalDate
          arrivalDate={item.arrivalDate}
          departureDate={item.departureDate}
        />
        <PaymentInformation />
      </div>
      {!isDesktop && (
        <div className='fixed bottom-0 left-0 flex w-full flex-col items-center justify-center rounded-tl-lg rounded-tr-md bg-background-2 p-4'>
          <div className='flex w-full items-center justify-between pb-3 pt-1'>
            <h6 className='b1_bold text-stroke-secondary'>
              {t('total_price')}
            </h6>
            <Price
              amount={item.wholePriceNumberAdditional}
              className='!t1_bold pr-1 text-stroke-tertiary'
              classNameUnit='!b2_regular !text-stroke-secondry'
            />
          </div>
          <Button className='b2_bold w-full py-3 lg:block' typeColor='success'>
            {t('payment_cash')}
          </Button>
        </div>
      )}
    </div>
  );
}
