import { FC, ReactNode, useEffect, useRef } from 'react';

import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/libs/utils';

import Icon from '@/ui-kit/icon/Icon';
import themeClassName from '@/ui-kit/themeClassName';

interface TPropsBottomSheet {
  label: string | null;
  children: ReactNode;
  onClose: () => void;
}

const BottomSheet: FC<TPropsBottomSheet> = ({ children, label, onClose }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClick(wrapperRef, () => {
    onClose();
  });

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return (): void => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className={themeClassName.modal_out}>
      <div
        ref={wrapperRef}
        className={cn(
          themeClassName.modal_main,
          'absolute bottom-0 left-0 right-0 rounded-r-2xl rounded-t-2xl',
        )}
      >
        <header className='relative mb-4 flex min-h-[20px] justify-center'>
          <Icon
            name='circle_close'
            classes='text-xl text-stroke-tertiary absolute right-0'
            onClick={onClose}
          />

          <div className='flex flex-col items-center before:left-0 before:right-0 before:mx-auto before:h-1 before:w-[60px] before:rounded-xl before:bg-stroke-primary'>
            {label && (
              <h6 className='b1_bold pt-5 text-text-secondary'>{label}</h6>
            )}
          </div>
        </header>
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
