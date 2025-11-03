import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import DatePicker from '@/ui-kit/date-picker/DatePicker';
import Input from '@/ui-kit/input/Input';

import { DynamicFieldData } from './dynamic-control-types';

export const DynamicControl: FC<DynamicFieldData> = ({
  label,
  inputType,
  fieldName,
  defaultValue,
  config = {},
}) => {
  const { register } = useFormContext();
  const t = useTranslations('Profile');

  switch (inputType) {
    case 'text':
      return (
        <Input
          id={fieldName}
          type='text'
          {...register(fieldName, config)}
          defaultValue={defaultValue}
          label={t(label)}
        />
      );

    case 'number':
      return (
        <Input
          type='number'
          id={fieldName}
          {...register(fieldName, config)}
          defaultValue={defaultValue}
          label={t(label)}
        />
      );

    case 'date_picker':
      return (
        <DatePicker defaultValue={defaultValue as string} label={t(label)} />
      );
    default:
      return <input type='text' />;
  }
};
