import React, { useRef, useState } from 'react';

import { otpCodeNumberRegex } from '@/libs/regex-utils';

interface OtpInputProps {
  length: number;
  onChange: (otp: string, isComplete: boolean) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onChange }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ): void => {
    const { value } = e.target;
    if (otpCodeNumberRegex.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      const isComplete = newOtp.every((val) => val.length > 0);
      onChange(newOtp.join(''), isComplete);
      if (value && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ): void => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number,
  ): void => {
    const pasteData = e.clipboardData
      .getData('text')
      .slice(0, length - index)
      .split('');
    const newOtp = [...otp];
    pasteData.forEach((char, idx) => {
      if (otpCodeNumberRegex.test(char)) {
        newOtp[index + idx] = char;
      }
    });
    setOtp(newOtp);
    onChange(newOtp.join(''), false);
    if (index + pasteData.length - 1 < length) {
      inputRefs.current[index + pasteData.length - 1]?.focus();
    }
  };

  return (
    <div className='dir-ltr flex flex-row-reverse justify-between gap-2 md:gap-4'>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <input
            key={index}
            type='text'
            maxLength={1}
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={(e) => handlePaste(e, index)}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            className='h-[40px] w-[40px] rounded-xl border border-stroke-primary bg-background-1 text-center text-xl font-bold md:h-[48px] md:w-[48px] lg:h-[56px] lg:w-[64px]'
          />
        ))}
    </div>
  );
};

export default OtpInput;
