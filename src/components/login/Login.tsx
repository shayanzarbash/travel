'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import useModalLogin from '@/hooks/useModalLogin';
import { cleanValue } from '@/libs/regex-utils';

import Button from '@/ui-kit/button/Button';
import Input from '@/ui-kit/input/Input';

export default function Login(): JSX.Element {
  const t = useTranslations('Auth');
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const { closeLoginModal } = useModalLogin();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const cleanedValue = value.replace(cleanValue, '');
    setInputValue(cleanedValue);
    if (cleanedValue.length === 11) {
      setIsPhoneNumberValid(true);
    } else {
      setIsPhoneNumberValid(false);
    }
  };

  const handlePhoneNumber = (): void => {
    router.push('/auth/otp');
  };

  return (
    <div className='relative mt-6 w-[288px] rounded-3xl bg-background-2 px-5 md:w-[400px] md:px-9 md:py-3 lg:w-[480px] lg:py-6'>
      <div className='flex items-center justify-center pb-3 pt-4 md:pb-4 md:pt-3 lg:pb-6'>
        <button
          onClick={closeLoginModal}
          className='absolute right-2'
          type='button'
        ></button>
        <Image
          src='/static/images/logo.svg'
          width={127}
          height={40}
          alt={t('first_star')}
        />
      </div>
      <div className='bg-white flex items-center justify-start pb-2 pt-1 sm:pt-2 md:pb-2 md:pt-1 lg:pb-6 lg:pt-2.5'>
        <h5 className='b2_bold text-text-primary'>{t('login')}</h5>
        <span className='mx-2 mt-0.5 text-text-orange'>|</span>
        <h5 className='b2_bold text-text-primary'>{t('sign_up')}</h5>
      </div>
      <h4 className='b2_regular pb-6 pt-2 md:pb-4 lg:pb-5'>
        {t('login_description')}
      </h4>
      <Input
        label={t('phone_number')}
        placeholder={t('example_phoneNumber')}
        value={inputValue}
        onChange={handleInputChange}
        className='pb-9 md:pb-10 lg:pb-16'
        maxlengthNumber={11}
      />
      <Button
        className='b1_bold mb-3 w-full py-3'
        typeColor='primary'
        onClick={handlePhoneNumber}
        disabled={!isPhoneNumberValid}
      >
        {t('confirm_continue')}
      </Button>
      <h4 className='b2_regular pb-4 text-center'>
        {t('login_rules_first')}
        <Link href='' className='b2_bold text-text-orange'>
          {t('login_rules_second')}
        </Link>
        {t('login_rules_third')}
      </h4>
    </div>
  );
}
