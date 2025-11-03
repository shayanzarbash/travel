import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import PaymentList from '@/app/[locale]/profile/payment/components/payment-list/PaymentList';

interface Props {
  params: { locale: string };
}

export default function ProfilePaymentPage({
  params: { locale },
}: Props): JSX.Element {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Profile');

  return (
    <div className='w-full md:h-[400px] lg:h-[100%]'>
      <h2 className='t1_black hidden pb-8 pt-2 lg:block'>{t('payment')}</h2>
      <PaymentList />
    </div>
  );
}
