import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '@/styles/globals.css';

import LayoutCore from '@/components/layout/LayoutCore';

import { configFonts } from '@/locales/config';

export const metadata: Metadata = {
  title: ' شرکت فناوری اطلاعات ناواکو',
  description:
    'درباره ما شرکت فناوری و اطلاعات ناواکو بعنوان شرکت مادر تخصصی فناوری و نوآوری بانک مسکن، یک شرکت پیشرو در زمینه فناوری و اطلاعات است که به ارائه راه‌حل‌های نوآورانه و پیشرفته برای مشتریان خود متمرکز است. تیم متخصص و با تجربه ما به طراحی، توسعه، پیاده‌سازی، نظارت، مشاوره و نگهداری در حوزه مرکز داده',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}): Promise<JSX.Element> {
  // Providing all locales to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={configFonts[locale]?.dir}>
      <body className={configFonts[locale]?.font || ''}>
        <NextIntlClientProvider messages={messages}>
          <LayoutCore>{children}</LayoutCore>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
