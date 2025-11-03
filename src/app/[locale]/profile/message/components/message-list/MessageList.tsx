import { useTranslations } from 'next-intl';

import EmptyStatus from '@/app/[locale]/profile/components/empty-status/EmptyStatus';
import MessageCard from '@/app/[locale]/profile/message/components/message-card/MessageCard';

const messages = [
  {
    id: 1,
    title: '۲۰ درصد تخفیف برای رزرو یک ماه قبل تر',
    sub_title: 'اقامتگاه مشهد',
    description:
      'به دنبال مکانی دنج و آرام برای گذراندن تعطیلات خود هستید؟ستاره هشتم را به شما معرفی می‌کنیم! این سوییت زیبا با امکانات رفاهی کامل، موقعیت مکانی عالی و چشم‌اندازی بی‌نظیر، اقامتی خاطره‌انگیز را برای شما رقم خواهد زد.',
    time: '۱۴:۲۰',
    date: '۱۴۰۰/۰۸/۲۱',
    status: 'active',
  },
  {
    id: 2,
    title: '۲۰ درصد تخفیف برای رزرو یک ماه قبل تر',
    sub_title: 'اقامتگاه کیش',
    description:
      'به دنبال مکانی دنج و آرام برای گذراندن تعطیلات خود هستید؟ستاره هشتم را به شما معرفی می‌کنیم!',
    time: '۱۴:۲۰',
    date: '۱۴۰۰/۰۸/۲۱',
    status: 'inactive',
  },
  {
    id: 3,
    title: '۲۰ درصد تخفیف برای رزرو یک ماه قبل تر',
    sub_title: 'اقامتگاه مشهد',
    description:
      'به دنبال مکانی دنج و آرام برای گذراندن تعطیلات خود هستید؟ستاره هشتم را به شما معرفی می‌کنیم!',
    time: '۱۴:۲۰',
    date: '۱۴۰۰/۰۸/۲۱',
    status: 'active',
  },
  {
    id: 4,
    title: '۲۰ درصد تخفیف برای رزرو یک ماه قبل تر',
    sub_title: 'اقامتگاه مشهد',
    description:
      'به دنبال مکانی دنج و آرام برای گذراندن تعطیلات خود هستید؟ستاره هشتم را به شما معرفی می‌کنیم!',
    time: '۱۴:۲۰',
    date: '۱۴۰۰/۰۸/۲۱',
    status: 'active',
  },
];

export default function MessageList(): JSX.Element {
  const t = useTranslations('Profile');

  return (
    <div>
      {messages.length ? (
        messages.map((message) => <MessageCard key={message.id} {...message} />)
      ) : (
        <EmptyStatus
          src='/static/images/profile/no-message.svg'
          title={t('no_message_recorded')}
        />
      )}
    </div>
  );
}
