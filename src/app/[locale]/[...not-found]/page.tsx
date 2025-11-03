import { unstable_setRequestLocale } from 'next-intl/server';

import NotFound from '@/app/[locale]/[...not-found]/not-found';

interface Props {
  params: { locale: string };
}

export default function NotFoundPage({
  params: { locale },
}: Props): JSX.Element {
  unstable_setRequestLocale(locale);

  return <NotFound />;
}
