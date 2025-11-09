import { unstable_setRequestLocale } from 'next-intl/server';

import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

import NestList from '@/app/[locale]/(nests)/nests/components/NestList/NestList';

interface Props {
  params: { locale: string };
}

export default function CityPage({ params: { locale } }: Props): JSX.Element {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Breadcrumb />
      <div className='flex items-start gap-4 pb-[4rem]'>
        <NestList />
      </div>
    </>
  );
}
