import { LocalePrefix, Pathnames } from 'next-intl/routing';

import { fontLato, fontYekanBakhFaNum } from '@/styles/fonts';

export type TLanguage = 'fa' | 'en';

export const defaultLocale: TLanguage = 'fa' as const;
export const locales: TLanguage[] = [defaultLocale, 'en'] as const;

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    fa: '/pfadnamen',
  },
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const port = process.env.PORT ?? 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const cookieName = 'locale';

interface IConfigFonts {
  [key: string]: {
    dir: string;
    font: string;
    img: string;
  };
}

export const configFonts: IConfigFonts = {
  fa: {
    dir: 'rtl',
    font: fontYekanBakhFaNum.className,
    img: '/static/images/header/persian.svg',
  },
  en: {
    dir: 'ltr',
    font: fontLato.className,
    img: '/static/images/header/english.svg',
  },
};
