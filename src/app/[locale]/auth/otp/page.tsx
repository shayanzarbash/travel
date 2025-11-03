import { unstable_setRequestLocale } from 'next-intl/server';

import OtpForm from '@/components/otp-form/OtpForm';

interface Props {
  params: { locale: string };
}

export default function LoginPage({ params: { locale } }: Props): JSX.Element {
  unstable_setRequestLocale(locale);

  return (
    <div className='container m-auto flex h-screen flex-col items-center justify-center'>
      <OtpForm />
    </div>
  );
}
