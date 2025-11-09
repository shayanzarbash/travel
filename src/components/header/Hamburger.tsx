'use client';

import { useTranslations } from 'next-intl';
import { createElement, FC, ReactNode } from 'react';

import { cn } from '@/libs/utils';

import Link from '@/ui-kit/link/Link';
import themeClassName from '@/ui-kit/themeClassName';

interface MenuItem {
  title: string;
  link?: string;
  sub_menu?: MenuItem[];
  img?: string;
  children?: () => ReactNode;
}

interface TPropsHamburger {
  menuItems: MenuItem[];
}

const Hamburger: FC<TPropsHamburger> = ({ menuItems }) => {
  const t = useTranslations('Header.nav_bar');

  return (
    <div className={cn(themeClassName.modal_out, '!top-12')}>
      <div
        className={cn(
          themeClassName.modal_main,
          '[&>a:first-child>div]:pt-0 [&>a:last-child>div]:border-0 [&>a:last-child>div]:pb-0',
        )}
      >
        {menuItems.map((item) => {
          return (
            <Link href={item.link ?? ''} key={item.title}>
              <div className='flex flex-col border-b border-stroke-primary py-3 md:py-4'>
                <span className='b1_bold text-text-primary'>
                  {t(item.title)}
                </span>

                {item.sub_menu?.length && (
                  <div className='flex flex-col gap-3 pr-2 pt-2'>
                    {item.sub_menu?.map((subMenuItem) => (
                      <Link key={subMenuItem.title} href={item.link ?? ''}>
                        <span className='b1_regular flex items-center gap-1 text-text-primary'>
                          {subMenuItem.children &&
                            createElement(subMenuItem.children)}
                          {t(subMenuItem.title)}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Hamburger;
