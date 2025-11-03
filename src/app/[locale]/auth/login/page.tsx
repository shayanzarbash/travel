import { unstable_setRequestLocale } from 'next-intl/server';

import Login from '@/components/login/Login';

interface Props {
  params: { locale: string };
}

export default function LoginPage({ params: { locale } }: Props): JSX.Element {
  unstable_setRequestLocale(locale);

  return (
    <div className='container m-auto flex h-screen flex-col items-center justify-center'>
      <Login />
    </div>
  );
}
