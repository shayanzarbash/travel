import { ErrorMessage } from '@hookform/error-message';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import {
  FieldErrors,
  FieldValues,
  FormProvider,
  UseFormHandleSubmit,
  UseFormReturn,
} from 'react-hook-form';

import { DynamicFieldData } from '@/components/dynamic-form/dynamic-control-types';
import { DynamicControl } from '@/components/dynamic-form/DynamicControl';

import Button from '@/ui-kit/button/Button';
import Icon from '@/ui-kit/icon/Icon';

interface IFormProps {
  fields: DynamicFieldData[];
  hideSubmitButton?: boolean;
  handleSubmit: UseFormHandleSubmit<FieldValues, never>;
  isSubmitting: boolean;
  errors: FieldErrors<FormData>;
  formMethods: UseFormReturn<FieldValues>;
  classNameForm?: string;
}

export const Form: FC<IFormProps> = ({
  fields,
  hideSubmitButton = false,
  handleSubmit,
  isSubmitting,
  errors,
  formMethods,
  classNameForm,
}) => {
  const t = useTranslations('Profile');

  return (
    <form onSubmit={handleSubmit}>
      <div className='relative grid grid-cols-1 gap-x-7 pb-0 md:grid-cols-2 md:pb-3'>
        <FormProvider {...formMethods}>
          {fields.map((d) => (
            <div key={d.fieldName} className='h-[70px] w-full md:h-[85px]'>
              <DynamicControl {...d} />
              <ErrorMessage
                errors={errors}
                name={d.fieldName}
                render={({ message }) => (
                  <div className='flex flex-row-reverse justify-end pt-1'>
                    <p className='c1_regular pr-2 text-error'>{t(message)}</p>
                    <Icon name='error' classes='text-sm text-error' />
                  </div>
                )}
              />
            </div>
          ))}
        </FormProvider>
      </div>
      {!hideSubmitButton && (
        <Button
          className={`bg-blue-500 text-white float-left mt-2 block w-full rounded px-4 py-2 md:absolute md:bottom-5 md:left-5 md:w-80 lg:-left-14 lg:bottom-5 lg:right-auto lg:w-40 ${classNameForm}`}
          disabled={isSubmitting}
        >
          {t('confirm_information')}
        </Button>
      )}
    </form>
  );
};
