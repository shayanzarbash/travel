'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import CardWhite from '@/components/card-white/CardWhite';
import { Form } from '@/components/dynamic-form/Form';

import { fields } from '@/app/[locale]/profile/info/components/profile-info/data';

const RequestMain: FC = () => {
  const t = useTranslations('Request');
  const formMethods = useForm();

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = formMethods;

  return (
    <div className='fle h-screen w-full flex-col gap-3 lg:h-full lg:flex-1 lg:gap-5'>
      <CardWhite className='w-ful gap-4 lg:gap-6'>
        <h4 className='t2_bold text-text-primary'>{t('booker_details')}</h4>
        <Form
          fields={fields}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          errors={errors}
          formMethods={formMethods}
          hideSubmitButton
        />
      </CardWhite>
    </div>
  );
};

export default RequestMain;
