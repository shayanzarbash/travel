import { unstable_setRequestLocale } from 'next-intl/server';

import HeroSection from '@/app/[locale]/(home)/components/hero-section/HeroSection';
import Main from '@/app/[locale]/(home)/components/main/Main';

interface Props {
  params: { locale: string };
}

export default function Home({ params: { locale } }: Props): JSX.Element {
  unstable_setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <Main />
    </>
  );
}
