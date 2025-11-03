import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { useModalStore } from '@/store/modal-store';

import Button from '@/ui-kit/button/Button';

const SuccessRequest: FC = () => {
  const t = useTranslations('Request');
  const { onClose } = useModalStore();
  return (
    <div className='flex flex-col items-center gap-2 md:w-[440px] lg:p-5'>
      <Image
        src='/static/images/green-tick.png'
        alt='logo'
        width={100}
        height={100}
        className='mb-1 h-[64px] w-[64px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]'
      />
      <h6 className='t1_bold lg:t1_black text-center text-green'>
        {t('success_title')}
      </h6>
      <h6 className='b1_regular text-center text-text-primary'>
        {t('success_desc')}
      </h6>
      <div className='w-full flex-1'>
        <Link href='/' onClick={onClose}>
          <Button className='mt-7 w-full'>{t('back_to_home')}</Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessRequest;
