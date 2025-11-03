import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales, TLanguage } from './locales/config';

// noinspection JSUnusedGlobalSymbols
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as TLanguage)) notFound();

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
