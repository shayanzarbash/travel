import { RegisterOptions } from 'react-hook-form';

export type ControlType =
  | 'text'
  | 'date'
  | 'number'
  | 'checkbox'
  | 'date_picker';

export interface SelectOption {
  label: string;
  value: string;
}

export interface DynamicFieldData {
  label: string;
  inputType: ControlType;
  fieldName: string;
  defaultValue?: string | number;
  options?: SelectOption[];
  config?: RegisterOptions;
}
