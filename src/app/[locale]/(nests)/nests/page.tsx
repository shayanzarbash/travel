import { unstable_setRequestLocale } from 'next-intl/server';

import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

import Filters from '@/app/[locale]/(nests)/nests/components/Filters/Filters';
import FiltersMobile from '@/app/[locale]/(nests)/nests/components/Filters/FiltersMobile';
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
        <Filters desktopMode />
        <NestList />
      </div>
      <FiltersMobile />
    </>
  );
}
