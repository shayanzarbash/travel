import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Icon from '@/ui-kit/icon/Icon';
import { TListIcon } from '@/ui-kit/icon/Icon.types';

const Footer: FC = () => {
  const t = useTranslations('Footer');

  return (
    <footer className='star_container flex flex-col gap-6 bg-background-2 py-6 lg:gap-10 lg:py-10'>
      <section className='flex flex-col justify-between gap-6 md:flex-row'>
        <div className='flex flex-col gap-6 md:flex-row md:gap-16'>
          {links.map((linkItem, index) => (
            <div key={index}>
              <Icon name='dots' classes='text-[4px]' />
              <div className='mt-4 flex flex-col gap-4 md:mt-6 md:gap-6 lg:mt-8'>
                {linkItem.map((linkSubItem) => (
                  <Link
                    key={linkSubItem.title}
                    className='b1_bold text-text-primary'
                    href={linkSubItem.title}
                    title={t(linkSubItem.title)}
                  >
                    {t(linkSubItem.title)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col'>
          <h6 className='b2_bold text-center text-text-primary md:text-right'>
            {t('follow_we_on_social')}
          </h6>
          <div className='mb-3 mt-4 flex items-center justify-evenly gap-12 border-b border-stroke-primary pb-3 md:mb-4 md:pb-4 lg:mb-6 lg:mt-3 lg:justify-start lg:pb-6 [&>a:first-child>.breaker]:hidden'>
            {socialList.map((socialListItem) => (
              <a
                key={socialListItem.icon}
                className='relative flex items-center'
                title={t(socialListItem.title)}
                href=''
              >
                <div className='breaker absolute -right-6 top-1/2 my-0.5 h-[calc(100%-2px)] w-[1px] -translate-y-1/2 transform rounded-full bg-stroke-primary' />

                <Icon
                  name={socialListItem.icon as TListIcon}
                  classes='text-stroke-secondary text-2xl'
                />
              </a>
            ))}
          </div>
          <h6 className='b2_bold mb-2 text-center text-text-primary md:text-start'>
            {t('telephone_support')}
          </h6>
          <h6 className='b2_bold text-center text-text-primary md:text-start'>
            {t('address')}
          </h6>
        </div>
      </section>
      <section className='flex flex-col rounded-2xl bg-background-1 p-4 lg:gap-8 lg:rounded-3xl lg:p-8'>
        <div className='flex flex-col justify-between gap-4 lg:flex-row lg:gap-16'>
          <div className='flex flex-col gap-2 lg:gap-4'>
            <h5 className='t1_bold text-text-primary'>{t('setare_aval')}</h5>
            <p className='b2_regular text-justify text-text-primary'>
              {t('setare_aval_desc')}
            </p>
          </div>
          <div className='mx-auto mb-2 flex w-full items-center justify-center rounded-lg bg-background-2 py-3 lg:mb-0 lg:contents lg:w-fit lg:justify-end lg:rounded-xl lg:bg-transparent lg:py-0'>
            <Image
              src='/static/images/footer/logo.svg'
              alt={t('setare_aval_logo')}
              width={140}
              height={140}
              className='h-[80px] w-[80px] lg:h-[140px] lg:w-[140px]'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-5'>
          {products.map((productItem) => (
            <div
              key={productItem.title}
              className='flex items-center justify-center rounded-lg bg-background-2 py-3 lg:rounded-xl'
            >
              <Image
                src={productItem.image}
                width={productItem.width}
                height={productItem.height}
                alt={t(productItem.title)}
              />
            </div>
          ))}
        </div>
      </section>
      <h6 className='c1_regular text-center text-text-secondary'>
        {t('copy_wright')}
      </h6>
    </footer>
  );
};

export default Footer;

const links = [
  [
    {
      title: 'travel_nest_mashhad',
      link: '',
    },
    {
      title: 'travel_nest_kish',
      link: '',
    },
    {
      title: 'travel_nest_ramsar',
      link: '',
    },
  ],
  [
    {
      title: 'account',
      link: '',
    },
    {
      title: 'requests',
      link: '',
    },
  ],
];

const socialList = [
  {
    icon: 'instagram',
    link: '',
    title: 'instagram',
  },
  {
    icon: 'envelope',
    link: '',
    title: 'email',
  },
  {
    icon: 'aparat',
    link: '',
    title: 'aparat',
  },
  {
    icon: 'linkdin',
    link: '',
    title: 'linkdin',
  },
];

const products = [
  {
    image: '/static/images/footer/stare_yek.svg',
    title: 'stare_yek',
    link: '',
    width: 76,
    height: 18,
  },
  {
    image: '/static/images/footer/ussd.svg',
    title: 'ussd',
    link: '',
    width: 54,
    height: 36,
  },
  {
    image: '/static/images/footer/rondtarin.svg',
    title: 'rondtarin',
    link: '',
    width: 62,
    height: 24,
  },
  {
    image: '/static/images/footer/setare_100.svg',
    title: 'setare_100',
    link: '',
    width: 74,
    height: 36,
  },
];
