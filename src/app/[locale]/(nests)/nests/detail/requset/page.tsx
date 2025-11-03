import { unstable_setRequestLocale } from 'next-intl/server';

import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

import RegusetMain from '@/app/[locale]/(nests)/nests/components/RequestMain/RegusetMain';
import SideBar from '@/app/[locale]/(nests)/nests/components/SideBar/SideBar';

interface Props {
  params: { locale: string };
}

export default function Page({ params: { locale } }: Props): JSX.Element {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <Breadcrumb />
      <div className='flex flex-col items-start gap-3 lg:flex-row lg:gap-5 lg:pb-10'>
        <RegusetMain />
        <SideBar isReguestPage />
      </div>
    </div>
  );
}
