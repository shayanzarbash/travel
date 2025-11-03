import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import MessageList from '@/app/[locale]/profile/message/components/message-list/MessageList';

interface Props {
  params: { locale: string };
}

export default function ProfileMessagePage({
  params: { locale },
}: Props): JSX.Element {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Profile');

  return (
    <div className='w-full md:h-[400px] lg:h-[100%]'>
      <h2 className='t1_black hidden pb-8 pt-2 lg:block'>{t('massage')}</h2>
      <MessageList />
    </div>
  );
}
