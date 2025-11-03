'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface TNestInformation {
  status: string;
  nameNest: string;
  link: string;
}

export default function NestInformation({
  status,
  nameNest,
  link,
}: TNestInformation): JSX.Element {
  const t = useTranslations('Profile');

  return (
    <>
      <Image
        src='/static/images/home/image-sample.jpeg'
        alt='title'
        width={352}
        height={186}
        className='h-auto w-full rounded-md lg:h-[186px] lg:w-[352px]'
      />
      <div className='flex flex-row items-center justify-between pb-0 pt-2.5 lg:pb-1.5 lg:pt-4'>
        <h5 className='b1_bold text-stroke-secondary'>{t('residence')}</h5>
        <h6 className='c1_regular flex items-center justify-between rounded-lg border border-stroke-orange px-1.5 py-1.5'>
          {status}
        </h6>
      </div>
      <div className='flex items-center justify-between border-b border-stroke-primary pb-2 pt-2 lg:pb-4 lg:pt-2'>
        <h5 className='b1_bold text-stroke-tertiary'>{nameNest}</h5>
        <Link href={link} className='c1_bold text-text-orange'>
          {t('view_accommodation')}
        </Link>
      </div>
    </>
  );
}
