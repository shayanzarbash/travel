'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import useDeviceType from '@/hooks/useDeviceType';

import { useModalStore } from '@/store/modal-store';

import Button from '@/ui-kit/button/Button';

export default function Logout(): JSX.Element {
  const t = useTranslations('Profile');
  const { openModal, onClose } = useModalStore();
  const { isMobile } = useDeviceType();
  const router = useRouter();

  useEffect(() => {
    const handleCloseBottomSheet = (): void => {
      if (!isMobile) {
        router.push('/');
        onClose();
      }
    };

    if (!isMobile) {
      openModal({
        title: t('logout'),
        children: (
          <div>
            <h6 className='b1_regular pt-4'>{t('login_message')}</h6>
            <Button
              onClick={handleCloseBottomSheet}
              className='mt-9 w-full'
              typeColor='danger'
            >
              {t('logout')}
            </Button>
          </div>
        ),
        hideHeader: false,
      });
    }
  }, [isMobile, openModal, t, router, onClose]);

  return <></>;
}
