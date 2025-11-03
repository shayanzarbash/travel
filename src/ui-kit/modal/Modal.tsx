'use client';

import { FC, useEffect, useRef } from 'react';

import useDeviceType from '@/hooks/useDeviceType';
import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/libs/utils';

import { useModalStore } from '@/store/modal-store';

import BottomSheet from '@/ui-kit/bottom-sheet/BottomSheet';
import Icon from '@/ui-kit/icon/Icon';
import themeClassName from '@/ui-kit/themeClassName';

const Modal: FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClick(wrapperRef, () => {
    onClose();
  });

  const { isMobile } = useDeviceType();

  const {
    onClose,
    isOpenModal,
    children,
    title,
    className,
    hideHeader,
    titleMobile,
  } = useModalStore((state) => state);

  useEffect(() => {
    if (isOpenModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpenModal]);

  if (!isOpenModal) return null;

  if (isMobile) {
    return (
      <BottomSheet label={titleMobile ?? title} onClose={onClose}>
        {children}
      </BottomSheet>
    );
  }

  return (
    <div
      className={cn(
        themeClassName.modal_out,
        'flex items-center justify-center',
        isOpenModal ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div
        ref={wrapperRef}
        className={cn(
          themeClassName.modal_main,
          'max-w-[480px] rounded-2xl lg:rounded-3xl',
          className,
        )}
      >
        {!hideHeader && (
          <header className='relative mb-6 flex min-h-[20px] justify-center'>
            <Icon
              name='circle_close'
              classes='text-2xl mt-1 text-stroke-tertiary absolute right-0'
              onClick={onClose}
            />
            {title && (
              <h6 className='text-t1_bold_md text-text-primary'>{title}</h6>
            )}
          </header>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
