'use client';

import React, { ChangeEvent, FC, forwardRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { phoneNumberRegex } from '@/libs/regex-utils';
import { cn } from '@/libs/utils';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  maxlengthNumber?: number | undefined;
  required?: boolean;
  disabled?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  id?: string;
  defaultValue?: string | number;
  register?: ReturnType<typeof useForm>['register'];
}

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
  (
    {
      type,
      label,
      value,
      onChange,
      className = '',
      maxlengthNumber = 11,
      ...props
    },
    ref,
  ) => {
    const [inputType, setInputType] = useState<string>('type');
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = (): void => setIsFocused(true);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      const newValue = e.target.value;
      onChange?.(e);

      if (phoneNumberRegex.test(newValue)) {
        setInputType('number');
      } else if (value === '' && type) {
        setInputType(type);
      }
    };

    return (
      <div className={`relative ${className}`}>
        <input
          value={value}
          onFocus={handleFocus}
          onChange={handleChange}
          className={cn(
            'b2_regular block w-full rounded-xl border border-stroke-fourth px-4 py-3 transition duration-300 ease-in',
            inputType === 'number' ? 'text-left' : 'text-right',
            value === '' && 'text-right',
            'focus:border-stroke-tertiary',
          )}
          maxLength={inputType === 'number' ? maxlengthNumber : undefined}
          dir={inputType === 'rtl' ? 'rtl' : 'ltr'}
          ref={ref}
          {...props}
        />
        <label
          className={cn(
            'bg-white c1_regular pointer-events-none absolute right-2 px-1 text-text-primary transition-all duration-200 ease-in-out',
            (isFocused ?? value ?? props.placeholder)
              ? '-top-2 right-4 bg-background-2 text-xs text-stroke-tertiary'
              : 'top-3 text-sm',
          )}
        >
          {label}
        </label>
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
