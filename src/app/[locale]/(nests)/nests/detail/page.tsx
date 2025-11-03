import { unstable_setRequestLocale } from 'next-intl/server';

import DetailPage from '@/app/[locale]/(nests)/nests/components/DetailPage/DetailPage';

interface Props {
  params: { locale: string };
}

export default function Page({ params: { locale } }: Props): JSX.Element {
  unstable_setRequestLocale(locale);

  return <DetailPage />;
}
