import { unstable_setRequestLocale } from 'next-intl/server';

import ProfileMenu from '@/app/[locale]/profile/components/profile-menu/ProfileMenu';

interface Props {
  params: { locale: string };
}

export default function MobileMenu({ params: { locale } }: Props): JSX.Element {
  unstable_setRequestLocale(locale);

  return (
    <div className='block w-full lg:hidden'>
      <ProfileMenu />
    </div>
  );
}
