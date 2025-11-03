import { validateNationalCode } from '@/libs/national-code';
import { phonePattern } from '@/libs/regex-utils';

import { DynamicFieldData } from '@/components/dynamic-form/dynamic-control-types';

export const formFields: DynamicFieldData[] = [
  {
    fieldName: 'fullName',
    inputType: 'text',
    label: 'full_name',
    defaultValue: '',
    config: {
      required: 'this_filed_not_empty',
    },
  },
  {
    fieldName: 'nationalCode',
    inputType: 'number',
    label: 'national_code',
    defaultValue: '',
    config: {
      required: 'this_filed_not_empty',
      validate: (value) => validateNationalCode(value),
    },
  },
  {
    fieldName: 'phoneNumber',
    inputType: 'number',
    label: 'phone_number',
    defaultValue: '',
    config: {
      required: 'this_filed_not_empty',
      validate: (value) => phonePattern.test(value),
    },
  },
  {
    fieldName: 'birthDate',
    inputType: 'number',
    label: 'date_of_birth',
    defaultValue: '',
    config: {
      required: 'this_filed_not_empty',
    },
  },
];
