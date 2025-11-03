import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import Tabs, { TTab } from '@/components/tab-bar/TabBar';

import PreviousReservation from '@/app/[locale]/profile/request/components/previous-reservation/PreviousReservation';
import UpcomingReservation from '@/app/[locale]/profile/request/components/upcoming-reservation/UpcomingReservation';

interface Props {
  params: { locale: string };
}

const tabsData: TTab[] = [
  {
    id: 1,
    label: 'رزرو های پیش رو',
    content: <UpcomingReservation />,
  },
  {
    id: 2,
    label: 'رزرو های قبلی',
    content: <PreviousReservation />,
  },
];

export default function ProfileRequestPage({
  params: { locale },
}: Props): JSX.Element {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Profile');

  return (
    <div className='container mx-auto'>
      <h2 className='t1_black hidden pb-4 pt-2 lg:block'>{t('request')}</h2>
      <Tabs tabs={tabsData} />
    </div>
  );
}
