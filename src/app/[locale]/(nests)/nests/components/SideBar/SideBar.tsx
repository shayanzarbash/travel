'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';

import useDeviceType from '@/hooks/useDeviceType';
import useModalLogin from '@/hooks/useModalLogin';
import { cn } from '@/libs/utils';

import CardWhite from '@/components/card-white/CardWhite';

import { useModalStore } from '@/store/modal-store';

import DetailReserve from '@/app/[locale]/(nests)/nests/components/DetailReserve/DetailReserve';
import SuccessRequest from '@/app/[locale]/(nests)/nests/components/SuccessRequest/SuccessRequest';
import mocks from '@/app/[locale]/(nests)/nests/detail/mocks';
import Button from '@/ui-kit/button/Button';
import Price from '@/ui-kit/price/Price';

interface TPropsSideBar {
  isShowRequest?: boolean;
  onToggleIsShowRequest?: Dispatch<SetStateAction<boolean>>;
  isReguestPage?: boolean;
}

const classNameCard =
  'rounded-lg border border-stroke-primary p-2 lg:rounded-2xl lg:p-4 flex flex-col gap-2 lg:gap-3';

const SideBar: FC<TPropsSideBar> = ({
  isShowRequest,
  onToggleIsShowRequest,
  isReguestPage = false,
}) => {
  const t = useTranslations('Detail');
  const { isDesktop } = useDeviceType();
  const { openLoginModal } = useModalLogin();

  const { openModal } = useModalStore();

  const onSubmit = (): void => {
    if (isReguestPage) {
      openModal({
        children: <SuccessRequest />,
        hideHeader: true,
        titleMobile: t('result_payment'),
      });
    } else {
      !isShowRequest && !isDesktop
        ? onToggleIsShowRequest && onToggleIsShowRequest(true)
        : openLoginModal();
    }
  };

  return (
    <>
      {isShowRequest && (
        <div className='flex h-[calc(100vh-150px)] flex-col gap-3 py-4'>
          <CardWhite className='flex-row gap-2 lg:gap-3'>
            <Image
              src={mocks.images[1]}
              width={48}
              height={48}
              alt=''
              className='h-[48px] w-[48px] rounded object-cover'
            />
            <div className='flex flex-1 flex-col justify-between'>
              <h6 className='b1_bold text-stroke-secondary'>{t('nest')}:</h6>
              <div className='flex items-center justify-between'>
                <h6 className='b1_bold flex items-center gap-1 text-text-primary'>
                  سوییت شماره ۳
                </h6>
                <h6 className='c1_bold cursor-pointer text-text-orange'>
                  {t('edit')}
                </h6>
              </div>
            </div>
          </CardWhite>
          <CardWhite className='gap-2'>
            <DetailReserve classNameCard={classNameCard} />
          </CardWhite>
        </div>
      )}
      <div
        className={cn(
          '!bottom-0 left-0 right-0 z-10 lg:static lg:bottom-auto lg:left-auto lg:right-auto lg:z-0 lg:mx-0 lg:w-[400px]',

          isShowRequest ? '!fixed' : '!sticky -mx-10 w-[calc(100%+2.5rem)]',
        )}
      >
        <CardWhite className='gap-2 !rounded-b-none lg:!rounded-xl'>
          {isDesktop ? (
            <>
              {isReguestPage ? (
                <div className={cn(classNameCard)}>
                  <Image
                    src={mocks.images[1]}
                    alt={t('nest')}
                    width={320}
                    height={186}
                    className='h-[186px] w-[320px] rounded-xl object-cover'
                  />
                  <div className='flex items-start justify-between'>
                    <h6 className='b1_bold text-stroke-secondary'>
                      {t('nest')}:
                    </h6>
                  </div>
                  <div className='flex items-center justify-between'>
                    <h6 className='b2_bold lg:b1_bold flex items-center gap-1 text-text-primary'>
                      مشهد سوییت شماره ۳
                    </h6>
                    <h6 className='c1_bold cursor-pointer text-text-orange'>
                      {t('edit')}
                    </h6>
                  </div>
                </div>
              ) : (
                <div className='flex items-center justify-between'>
                  <h6 className='b1_bold text-stroke-secondary'>
                    {t('price_per_night')}:
                  </h6>
                  <Price amount={6000000} />
                </div>
              )}
              <DetailReserve classNameCard={classNameCard} />
            </>
          ) : (
            <></>
          )}
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
              <h6 className='b1_bold text-stroke-secondary'>
                {t('total_price')}:
              </h6>
              <Price amount={1200000} />
            </div>
            <Button onClick={onSubmit} className=''>
              {t(isShowRequest ? 'verify_and_next' : 'request_reserve')}
            </Button>
          </div>
        </CardWhite>
      </div>
    </>
  );
};

export default SideBar;
