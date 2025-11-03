'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import useDeviceType from '@/hooks/useDeviceType';

import Hamburger from '@/components/header/Hamburger';
import NavItem from '@/components/header/NavItem';

import { MenuProfileItem } from '@/app/[locale]/profile/components/profile-menu/ProfileMenu';
import { configFonts } from '@/locales/config';
import Icon from '@/ui-kit/icon/Icon';

import { IGlobal } from '@/types/types-global';

const Header: FC = () => {
  const t = useTranslations('Header');
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);
  const [isShowHamburger, onToggleIsShowHamburger] = useState(false);
  const pathname = usePathname();
  const { isDesktop } = useDeviceType();

  useEffect(() => {
    const checkIfCanGoBack: IGlobal.TFunctionVoid = () => {
      const foundMatch = MenuProfileItem.some((item) => pathname === item.link);
      setCanGoBack(foundMatch);
    };
    checkIfCanGoBack();
  }, [pathname]);

  const handleBackClick = (): void => {
    if (canGoBack) {
      router.back();
    }
  };

  const handleChangeHamburger = (): void =>
    onToggleIsShowHamburger((prevState) => !prevState);

  useEffect((): void => {
    if (isShowHamburger) {
      document.body.classList.add('overflow-hidden');
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isShowHamburger]);

  return (
    <header className='sticky top-0 z-10 bg-background-2 py-2 lg:py-5'>
      <div className='star_container relative flex items-center justify-between'>
        {!isDesktop && (
          <div className='flex items-center'>
            <button
              onClick={handleBackClick}
              className={`h-[32px] w-[24px] ${
                canGoBack ? 'block text-error' : 'hidden'
              }`}
              disabled={!canGoBack}
            >
              <Icon
                name='arrow_right_2'
                classes=' text-3xl text-stroke-tertiary '
              />
            </button>
            {!canGoBack && (
              <Icon
                name={isShowHamburger ? 'close' : 'hamburger'}
                classes='text-2xl'
                onClick={handleChangeHamburger}
              />
            )}
            {isShowHamburger && <Hamburger menuItems={menuItems} />}
          </div>
        )}
        {!isDesktop && !canGoBack ? (
          <Image
            src='/static/images/logo.svg'
            alt='logo'
            width={127}
            height={40}
            className='h-[32px] w-[100px] lg:h-[40px] lg:w-[127px]'
          />
        ) : (
          !isDesktop && (
            <h6 className='t2_bold absolute right-1/2 translate-x-1/2 text-stroke-tertiary'>
              {t('profile')}
            </h6>
          )
        )}
        {isDesktop && (
          <Image
            src='/static/images/logo.svg'
            alt='logo'
            width={127}
            height={40}
            className='h-[32px] w-[100px] lg:h-[40px] lg:w-[127px]'
          />
        )}
        {isDesktop && (
          <nav className='flex items-center gap-16'>
            {menuItems.map((menuItem) => (
              <NavItem key={menuItem.title} {...menuItem} />
            ))}
          </nav>
        )}
        {isDesktop ? (
          <Link href='/auth/login'>
            <button className='rounded-lg bg-stroke-tertiary px-8 py-2 text-text-static'>
              {t('btn_login')}
            </button>
          </Link>
        ) : (
          !canGoBack && <Icon name='user_2' />
        )}
      </div>
    </header>
  );
};

export default Header;

const DefaultLang: FC = () => {
  const lang = useLocale();

  return (
    <>
      <Image src={configFonts[lang]?.img} width={24} height={16} alt={lang} />
    </>
  );
};

const menuItems = [
  {
    title: 'home_page',
    link: '/',
  },
  {
    title: 'travel_nests',
    sub_menu: [
      {
        title: 'mashhad',
        link: '/nests',
      },
    ],
  },
  {
    title: 'lang',
    children: (): JSX.Element => <DefaultLang />,
    link: '',
    sub_menu: [
      {
        title: 'persian',
        link: '/',
        img: 'persian',
        children: (): JSX.Element => (
          <div className='lg:mr-auto'>
            <Image src={configFonts.fa?.img} width={24} height={16} alt='fa' />
          </div>
        ),
      },
      {
        title: 'arabic',
        link: '/',
        img: 'arabic',
        children: (): JSX.Element => (
          <div className='lg:mr-auto'>
            <Image src={configFonts.en?.img} width={24} height={16} alt='ar' />
          </div>
        ),
      },
      {
        title: 'english',
        link: '/',
        img: 'english',
        children: (): JSX.Element => (
          <div className='lg:mr-auto'>
            <Image src={configFonts.en?.img} width={24} height={16} alt='en' />
          </div>
        ),
      },
    ],
  },
];
