'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';

import OtpInput from '@/components/otp-input/OtpInput';

import Button from '@/ui-kit/button/Button';
import Icon from '@/ui-kit/icon/Icon';

const OtpForm: FC = () => {
  const t = useTranslations('Auth');
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleOtpChange = (newOtp: string, isComplete: boolean): void => {
    setOtp(newOtp);
    setIsOtpComplete(isComplete);
  };

  useEffect(() => {
    // Start timer
    timerRef.current = setInterval((): void => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1 && timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup timer
    return (): void => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleOtpNumber = (): void => {
    router.push('/profile/info');
  };

  return (
    <div className='relative mt-6 w-[288px] rounded-3xl bg-background-2 px-5 md:w-[400px] md:px-9 md:py-3 lg:w-[480px] lg:py-6'>
      <div className='flex items-center justify-center pb-1 pt-4 md:pb-1 lg:pb-6'>
        <Image
          src='/static/images/logo.svg'
          width={127}
          height={40}
          alt={t('first_star')}
          className='pb-3.5 md:pb-3 lg:pb-4'
        />
        <p className='hidden'>{otp}</p>
      </div>
      <div className='flex flex-col items-start'>
        <div className='flex flex-row items-center pb-5 md:pb-5 lg:pb-8'>
          <Icon
            name='arrow_right'
            classes='w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-stroke-Tertiary text-2xl ml-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke-primary bg-background-1'
          />
          <h5 className='b2_bold text-right text-text-primary'>
            {t('confirm_phone_number')}
          </h5>
        </div>
        <h5 className='c1_regular pb-3 text-right text-text-primary'>
          {t('code_five_number_otp')}
          <span className='c1_bold'>{t('sample_number_profile')}</span>
          {t('send_massage')}
        </h5>
      </div>
      <OtpInput length={5} onChange={handleOtpChange} />
      <div className='flex flex-row items-baseline justify-center pb-6 pt-0 md:pb-6 md:pt-1 lg:pb-10'>
        <h5 className='text-black b2_regular ml-2'>
          {t('resend_code_number_otp')}
        </h5>
        <p className='b2_bold mt-4 text-center'>{formatTime(timeLeft)}</p>
      </div>
      <Button
        className='mb-2.5 w-full !py-3.5 text-sm md:mb-4 md:py-3'
        typeColor='primary'
        disabled={!isOtpComplete}
        onClick={handleOtpNumber}
      >
        {t('continue')}
      </Button>
      <h4 className='b2_regular mb-5 text-center md:mb-0 md:pb-4'>
        {t('login_rules_first')}
        <Link href='' className='b2_bold text-text-orange'>
          {t('login_rules_second')}
        </Link>
        {t('login_rules_third')}
      </h4>
    </div>
  );
};

export default OtpForm;
