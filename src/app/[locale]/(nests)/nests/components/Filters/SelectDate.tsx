import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Accordion from '@/ui-kit/accordion/Accordion';
import Icon from '@/ui-kit/icon/Icon';

const SelectDate: FC = () => {
  const t = useTranslations('Nests');
  return (
    <Accordion label={t('date')}>
      <div className='flex items-center justify-between'>
        <h6 className='b2_bold lg:b1_bold flex items-center gap-1 text-text-primary'>
          ۱۱ تیر{' '}
          <Icon name='arrow_left_2' classes='text-2xl text-text-primary' /> ۱۵
          تیر
        </h6>
        <h6 className='c1_bold cursor-pointer text-text-orange'>{t('edit')}</h6>
      </div>
    </Accordion>
  );
};

export default SelectDate;
