import { unstable_setRequestLocale } from 'next-intl/server';

import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import CardLocation from '@/components/card-location/CardLocation';
import CardTerms from '@/components/card-terms/CardTerms';

import mocks from '@/app/[locale]/(nests)/nests/detail/mocks';
import DetailNestSide from '@/app/[locale]/request-detail/components/detail-side/DetailNestSide';

interface Props {
  params: { locale: string };
}

export default function RequestDetailPage({
  params: { locale },
}: Props): JSX.Element {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Breadcrumb />
      <div className='flex flex-col items-start justify-between gap-3 lg:flex-row lg:gap-6'>
        <div className='order-2 flex w-full flex-col items-center justify-center lg:order-1'>
          <div className='mb-3.5'>
            <CardTerms
              entrance_hour={mocks.entrance_hour}
              leaving_hour={mocks.leaving_hour}
              documents={mocks.documents}
              other_terms={mocks.other_terms}
            />
          </div>
          <div className='w-full'>
            <CardLocation />
          </div>
        </div>
        <div className='order-1 w-full flex-col md:block lg:order-2 lg:mb-28 lg:flex lg:w-auto lg:min-w-[400px]'>
          <DetailNestSide />
        </div>
      </div>
    </>
  );
}
