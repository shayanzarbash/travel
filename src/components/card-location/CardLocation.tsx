import { useTranslations } from 'next-intl';
import { FC } from 'react';

import CardWhite from '@/components/card-white/CardWhite';
import Title from '@/components/title/Title';

import Icon from '@/ui-kit/icon/Icon';

const CardLocation: FC = () => {
  const t = useTranslations('Detail');

  return (
    <CardWhite className='gap-2 lg:gap-3'>
      <Title icon='pin' text={t('location')} />
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3215.8720155218866!2d59.5937861132922!3d36.29115518658375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1723099065628!5m2!1sfa!2s'
        width='100%'
        height='360'
        className='rounded-lg border-0 lg:rounded-xl'
        allowFullScreen
        loading='lazy'
      />

      <div className='flex items-center gap-1'>
        <Icon name='info' classes='text-text-secondary text-md' />
        <span className='b2_regular text-text-secondary'>
          {t('hint_location')}
        </span>
      </div>
    </CardWhite>
  );
};

export default CardLocation;
