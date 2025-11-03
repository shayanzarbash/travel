'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/libs/utils';

import { TListReserve } from '@/app/[locale]/profile/request/components/reservation-list/ReservationList';
import Icon from '@/ui-kit/icon/Icon';
import { TListIcon } from '@/ui-kit/icon/Icon.types';

type TPropsReservedCard = TListReserve;

export const getStatusClasses = (
  status: string,
): {
  classes: string;
  icon: TListIcon | '';
} => {
  switch (status) {
    case 'waiting_confirmation':
      return {
        classes: 'border-stroke-orange text-stroke-tertiary',
        icon: '',
      };
    case 'awaiting_payment':
      return {
        classes: 'border-stroke-orange text-stroke-tertiary',
        icon: '',
      };
    case 'paid':
      return {
        classes: 'border-green text-green',
        icon: 'success',
      };
    case 'expired':
      return {
        classes: 'border-error text-error',
        icon: 'time',
      };
    case 'finished':
      return {
        classes: 'border-stroke-secondary text-stroke-secondary',
        icon: '',
      };
    default:
      return {
        classes: 'border-stroke-fourth',
        icon: '',
      };
  }
};

export default function RequestCard({
  id,
  title,
  location,
  count_person,
  add_count_person,
  Departure_date,
  return_date,
  status,
  status_title,
  link,
  image,
}: TPropsReservedCard): JSX.Element {
  const t = useTranslations('Profile');

  const { classes: statusClasses, icon: statusIcon } = getStatusClasses(status);

  return (
    <>
      <div className='relative mb-5 flex flex-col items-center justify-between rounded-2xl border border-stroke-primary p-3 md:flex-row md:items-start'>
        <div className='flex w-full flex-col md:w-auto md:flex-row'>
          <Image
            alt={`${id} ${title}`}
            src={image}
            width={190}
            height={124}
            className='w-full rounded-lg md:w-[190px]'
          />
          <div className='flex flex-col items-start justify-start pr-0 pt-3 md:pr-3 md:pt-0'>
            <div>
              <h6 className='t2_bold pb-3.5'>{title}</h6>
            </div>
            <div className='flex items-center pb-1'>
              <Icon name='pin' classes='text-stroke-secondary text-xl' />
              <h6 className='b2_regular pr-1 text-stroke-secondary'>
                {location}
              </h6>
            </div>
            <div className='flex items-center pb-1.5'>
              <Icon name='user' classes='text-stroke-secondary text-xl' />
              <h6 className='b2_regular pr-1 text-stroke-secondary'>
                {count_person}
              </h6>
              <span className='pr-1 text-xl text-stroke-secondary'> + </span>
              <h6 className='b2_regular pr-1 text-stroke-secondary'>
                {add_count_person}
              </h6>
            </div>
            <div className='flex items-center'>
              <Icon name='calendar' classes='text-stroke-secondary text-xl' />
              <h6 className='b2_regular pl-1 pr-1 text-stroke-secondary'>
                {Departure_date}
              </h6>
              <Icon
                name='arrow_left_2'
                classes='text-stroke-secondary text-xl'
              />
              <h6 className='b2_regular pr-1 text-stroke-secondary'>
                {return_date}
              </h6>
            </div>
          </div>
        </div>
        <div className='flex h-auto flex-col items-end justify-between md:h-[127px]'>
          <div
            className={cn(
              'c1_regular absolute bottom-24 left-3 flex items-center justify-between rounded-lg border px-2 py-1',
              'md:static md:bottom-0 md:left-0',
              statusClasses,
            )}
          >
            <h6>{status_title}</h6>
            {statusIcon && <Icon name={statusIcon} classes='text-lg mr-2' />}
          </div>
          <div className='-ml-3 hidden md:block'>
            <Link href={link} className='flex items-center'>
              <h6 className='b2_bold py-1 text-text-primary'>
                {t('view_details')}
              </h6>
              <Icon
                name='arrow_left'
                classes='block text-3xl text-stroke-tertiary'
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
