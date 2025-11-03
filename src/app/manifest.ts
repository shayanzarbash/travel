import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';

import { defaultLocale } from '@/locales/config';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = defaultLocale;
  const t = await getTranslations({ locale, namespace: 'Global' });

  return {
    name: t('name'),
    start_url: '/fa',
    theme_color: '#101E33',
  };
}
