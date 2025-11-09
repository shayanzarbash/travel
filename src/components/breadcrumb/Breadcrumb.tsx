import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Icon from '@/ui-kit/icon/Icon';

const Breadcrumb: FC = () => {
  const t = useTranslations();

  return (
    <nav className='flex items-center gap-1 py-2 lg:top-[80px] lg:gap-2 lg:py-4'>
      <a className='b2_regular text-stroke-static'>{t('Global.home')}</a>
      <Icon
        name='arrow_left'
        classes='text-xl md:text-2xl text-stroke-static'
      />

      <h6 className='b2_bold text-stroke-static'>
        ناواکو
      </h6>
    </nav>
  );
};

export default Breadcrumb;
