'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/libs/utils';

import Icon from '@/ui-kit/icon/Icon';
import { TListIcon } from '@/ui-kit/icon/Icon.types';

interface IMenuItem {
  id: number;
  title: string;
  link: string;
  iconName: TListIcon;
  iconClass: string;
}

export const MenuProfileItem: IMenuItem[] = [
  {
    id: 1,
    title: 'account',
    link: '/profile/info',
    iconName: 'user_2',
    iconClass: 'text-xl text-stroke-tertiary',
  },
  {
    id: 2,
    title: 'request',
    link: '/profile/request',
    iconName: 'user_3',
    iconClass: 'text-2xl text-stroke-tertiary -mr-1',
  },
  {
    id: 3,
    title: 'payment',
    link: '/profile/payment',
    iconName: 'payment',
    iconClass: 'text-2xl text-stroke-tertiary -mr-1',
  },
  {
    id: 4,
    title: 'massage',
    link: '/profile/message',
    iconName: 'envelope_2',
    iconClass: 'text-lg text-stroke-tertiary',
  },
  {
    id: 5,
    title: 'logout',
    link: '/profile/logout',
    iconName: 'eject',
    iconClass: 'text-2xl text-stroke-secondary -mr-1',
  },
];

export default function ProfileMenu(): JSX.Element {
  const t = useTranslations('Profile');
  const pathname = usePathname();

  return (
    <div className='h-full rounded-2xl bg-background-2 px-1 pb-0 pt-1 lg:px-6 lg:pt-5'>
      <div className='flex flex-row-reverse items-center justify-end pb-3 md:pb-1'>
        <span className='t1_bold pr-3'>{t('sample_number_profile')}</span>
        <Image
          src='/static/images/profile/green-tick.png'
          alt='logo'
          width={24}
          height={24}
          className='mb-1'
        />
      </div>
      <ul>
        {MenuProfileItem.map((item, index) => {
          const isActive = pathname === item.link;
          return (
            <li
              key={item.id}
              className={cn(
                'border-b border-b-stroke-primary pb-2 pt-2',
                { 'last-li': index === MenuProfileItem.length - 1 },
                { 'last:border-none': true },
              )}
            >
              <Link
                href={item.link}
                className='flex items-center justify-between'
              >
                <div className='hover:bg-gray-200 flex items-center rounded py-1 lg:py-5'>
                  <span
                    className={cn({
                      'ml-3 h-[8px] w-[8px] rounded-full bg-stroke-orange':
                        isActive,
                    })}
                  ></span>
                  <Icon name={item.iconName} classes={item.iconClass} />
                  <h6
                    className={cn('b2_bold mr-2', {
                      'text-stroke-secondary':
                        index === MenuProfileItem.length - 1,
                    })}
                  >
                    {t(item.title)}
                  </h6>
                </div>
                <Icon
                  name='arrow_left'
                  classes='block lg:hidden text-3xl text-stroke-tertiary'
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
