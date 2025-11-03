'use client';

import { DetailedHTMLProps, FC, InputHTMLAttributes, useState } from 'react';

import Icon from '@/ui-kit/icon/Icon';

type TPropsCheckBox = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  onChange: (bool: boolean) => void;
};

const CheckBox: FC<TPropsCheckBox> = ({ label, onChange, ...props }) => {
  // State to manage the checked status of the checkbox
  const [checked, setChecked] = useState(props.checked ?? false);

  // Toggle the checkbox state on icon click
  const handleIconClick = (): void => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div className='flex items-center gap-1 lg:gap-2'>
      <Icon
        name={checked ? 'checkbox_fill' : 'checkbox'}
        classes='cursor-pointer'
        onClick={handleIconClick}
      />
      <label className='b2_bold text-text-primary'>{label}</label>
      <input {...props} type='checkbox' className='hidden' checked={checked} />
    </div>
  );
};

export default CheckBox;
