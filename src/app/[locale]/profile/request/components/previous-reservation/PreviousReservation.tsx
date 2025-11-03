import { useTranslations } from 'next-intl';

import EmptyStatus from '@/app/[locale]/profile/components/empty-status/EmptyStatus';

export default function PreviousReservation(): JSX.Element {
  const t = useTranslations('Profile');

  return (
    <>
      <EmptyStatus
        src='/static/images/profile/no-request.svg'
        title={t('no_request_registered')}
      />
    </>
  );
}
