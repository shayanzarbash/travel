import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Accordion from '@/ui-kit/accordion/Accordion';
import NumberStepper from '@/ui-kit/number-stepper/NumberStepper';

const TotalPeople: FC = () => {
  const t = useTranslations('Nests');
  return (
    <Accordion label={t('total_people')}>
      <NumberStepper
        label='نفر'
        className='!w-full justify-between'
        labelValue={t('person')}
      />
    </Accordion>
  );
};

export default TotalPeople;
