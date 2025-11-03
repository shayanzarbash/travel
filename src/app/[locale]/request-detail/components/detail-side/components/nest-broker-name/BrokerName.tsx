import { useTranslations } from 'next-intl';

export default function BrokerName({ name }: { name: string }): JSX.Element {
  const t = useTranslations('Profile');

  return (
    <div className='flex flex-col items-start justify-start border-b border-stroke-primary pb-2 pt-2 lg:pb-4 lg:pt-3'>
      <h5 className='b1_bold text-stroke-secondary'>{t('name_booker')}</h5>
      <h6 className='b1_bold pt-2 text-text-primary lg:pt-3'>{name}</h6>
    </div>
  );
}
