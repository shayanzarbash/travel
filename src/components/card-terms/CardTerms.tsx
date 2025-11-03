import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { cn } from '@/libs/utils';

import CardWhite from '@/components/card-white/CardWhite';
import Title from '@/components/title/Title';

interface TPropsCardTerms {
  entrance_hour: string;
  leaving_hour: string;
  documents: string;
  other_terms: string;
}

const classNameSpacing = 'gap-2 lg:gap-3';

const classNameCard = cn(
  'b2_regular flex flex-col  text-text-secondary ',
  classNameSpacing,
);

const CardTerms: FC<TPropsCardTerms> = ({
  entrance_hour,
  leaving_hour,
  documents,
  other_terms,
}) => {
  const t = useTranslations('Detail');

  return (
    <CardWhite className={cn(classNameSpacing)}>
      <Title icon='description' text={t('terms_and_conditions')} />
      <div
        className={cn(
          'grid grid-cols-2 border-b border-stroke-primary pb-2',
          classNameSpacing,
        )}
      >
        {[
          { title: 'entrance_hour', value: entrance_hour },
          { title: 'leaving_hour', value: leaving_hour },
        ].map((time_item) => (
          <h6
            key={time_item.title}
            className={cn(
              'border-l border-stroke-primary last:border-l-0',
              classNameCard,
            )}
          >
            {t(time_item.title)}
            <span className='text-text-primary'>{time_item.value}</span>
          </h6>
        ))}
      </div>
      {documents && (
        <h6
          className={cn('border-b border-stroke-primary pb-2', classNameCard)}
        >
          {t('documents')}:
          <span className='text-text-primary'>{documents}</span>
        </h6>
      )}
      <h6 className={cn('pb-2', classNameCard)}>
        {t('other_terms')}:
        <span className='text-text-primary'>{other_terms}</span>
      </h6>
    </CardWhite>
  );
};

export default CardTerms;
