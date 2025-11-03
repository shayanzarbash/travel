'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import useDeviceType from '@/hooks/useDeviceType';
import { cn } from '@/libs/utils';

import { useModalStore } from '@/store/modal-store';

import BottomSheet from '@/ui-kit/bottom-sheet/BottomSheet';
import Button from '@/ui-kit/button/Button';
import Icon from '@/ui-kit/icon/Icon';

interface TMessageProps {
  id?: number;
  title: string;
  sub_title: string;
  description?: string;
  time: string;
  date: string;
  status: string;
}

export default function MessageCard({
  title,
  sub_title,
  description,
  time,
  date,
  status,
}: TMessageProps): JSX.Element {
  const t = useTranslations('Profile');
  const { openModal } = useModalStore();

  const [isActive, setIsActive] = useState(status === 'active');

  const [isShowFilter, onToggleIsShowFilter] = useState(false);
  const { isMobile } = useDeviceType();

  const handleOpenBottomSheet = (): void => {
    if (isMobile) {
      setIsActive(!isActive);
      onToggleIsShowFilter(true);
    }
  };

  const handleCloseBottomSheet = (): void => {
    if (isMobile) {
      onToggleIsShowFilter(false);
    }
  };

  const handleOpenModal = (): void => {
    setIsActive(!isActive);

    openModal({
      title: t('message'),
      children: (
        <div>
          <h6 className='b1_bold pb-4 pt-3'>{sub_title}</h6>
          <p className='b2_regular'>{description}</p>
        </div>
      ),
    });
  };

  return (
    <>
      <div className='relative mb-4 flex flex-col items-start justify-between rounded-lg border border-stroke-primary bg-background-2 p-2.5 sm:flex-row sm:items-center lg:p-3.5'>
        <div className='flex items-center'>
          <span
            className={cn({
              'ml-2.5 h-[8px] w-[8px] rounded-full bg-stroke-orange': isActive,
            })}
          ></span>
          {!isMobile && <h5 className='b2_bold'>{title}</h5>}
          {isMobile && (
            <h5 onClick={handleOpenBottomSheet} className='b2_bold'>
              {title}
            </h5>
          )}
        </div>
        <div className='flex justify-between pt-2.5 sm:items-center sm:pt-0'>
          <div className='flex items-baseline pr-0.5 sm:pr-0'>
            <h6 className='c1_regular pl-2'>{time}</h6>
            <span className='h-[7px] w-[1px] bg-stroke-primary'></span>
            <h6 className='c1_regular pr-2'>{date}</h6>
          </div>
          <Button
            typeColor='secondary'
            onClick={handleOpenModal}
            className='b2_bold mr-3 hidden items-center rounded-md !border border-stroke-primary px-4 py-2 transition duration-300 ease-in-out hover:cursor-pointer hover:border-stroke-tertiary lg:flex'
          >
            {t('view_details')}
            <Icon
              name='arrow_left'
              classes='pr-1 text-stroke-tertiary text-lg lg:text-xl'
            />
          </Button>
        </div>
      </div>
      {isShowFilter && (
        <BottomSheet label={t('message')} onClose={handleCloseBottomSheet}>
          <div>
            <h6 className='b1_bold pb-3'>{sub_title}</h6>
            <p className='b2_regular'>{description}</p>
            <Button
              typeColor='secondary'
              className='b2_bold mt-4 w-full !border border-stroke-primary'
              onClick={handleCloseBottomSheet}
            >
              {t('close')}
            </Button>
          </div>
        </BottomSheet>
      )}
    </>
  );
}
