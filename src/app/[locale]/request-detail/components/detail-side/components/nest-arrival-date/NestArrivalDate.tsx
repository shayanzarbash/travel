import { useTranslations } from 'next-intl';

import Icon from '@/ui-kit/icon/Icon';

export default function NestArrivalDate({
  arrivalDate,
  departureDate,
}: {
  arrivalDate: string;
  departureDate: string;
}): JSX.Element {
  const t = useTranslations('Profile');

  return (
    <div className='flex flex-col items-start justify-start border-b border-stroke-primary pb-2 pt-2 lg:pb-4 lg:pt-4'>
      <h5 className='b1_bold text-stroke-secondary'>
        {t('arrival_departure_date')}
      </h5>
      <div className='flex flex-row items-center justify-center pt-2 lg:pt-3.5'>
        <h6 className='b1_bold pl-2 text-text-primary'>{arrivalDate}</h6>
        <Icon name='arrow_left_2' classes='text-text-primary text-xl' />
        <h6 className='b1_bold pr-2 text-text-primary'>{departureDate}</h6>
      </div>
    </div>
  );
}
