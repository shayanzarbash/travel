'use client';

import { useForm } from 'react-hook-form';

import { Form } from '@/components/dynamic-form/Form';

import { fields } from './data';

export default function ProfileInfo(): JSX.Element {
  const formMethods = useForm();

  const {
    handleSubmit,
    formState: { isSubmitting = true, errors },
  } = formMethods;

  return (
    <div className='pt-2 md:pt-0'>
      <Form
        fields={fields}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        errors={errors}
        formMethods={formMethods}
        classNameForm='fixed custom-width-button transform translate-x-1/2 right-1/2 bottom-[15px]'
      />
    </div>
  );
}
