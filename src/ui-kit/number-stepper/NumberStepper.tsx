'use client';

import { useTranslations } from 'next-intl';
import { FC, useRef, useState } from 'react';

import useDeviceType from '@/hooks/useDeviceType';
import { cn } from '@/libs/utils';

import BottomSheet from '@/ui-kit/bottom-sheet/BottomSheet';
import Icon from '@/ui-kit/icon/Icon';
import themeClassName from '@/ui-kit/themeClassName';

interface TArg {
  name: string | null;
  value: number;
}

interface TPropsNumberStepper {
  label?: string;
  name?: string;
  className?: string;
  labelValue: string;
  maxNumber?: number;
  initialValue?: number;
  isBottomSheet?: boolean;
  handleChange?: (option: TArg) => void;
}

type TNumber = 'MINUS' | 'PLUS';

type TOnScrollTab = (index: number) => void;

type TOnChange = (type: TNumber) => void;

const classNameDefault = 'text-2xl text-stroke-tertiary text-xl';

const NumberStepper: FC<TPropsNumberStepper> = ({
  label,
  name,
  labelValue,
  handleChange,
  isBottomSheet,
  maxNumber,
  className,
  initialValue = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isShowBottomSheet, onToggleIsShowBottomSheet] = useState(false);

  const [number, onChangeNumber] = useState<number>(initialValue);
  const t = useTranslations('Global');

  const handleChangeIsShowBottomSheet = (): void =>
    onToggleIsShowBottomSheet((prevState) => !prevState);

  const { isMobile } = useDeviceType();
  const onChange: TOnChange = (type) => {
    if (!number && type === 'MINUS') return;
    if (maxNumber === number && type === 'PLUS') return;
    const newNumber = type === 'MINUS' ? number - 1 : number + 1;
    onChangeNumber(newNumber);
    maxNumber && onScrollTab(newNumber);
    handleChange &&
      handleChange({
        name: name ?? null,
        value: newNumber,
      });
  };

  const onScrollTab: TOnScrollTab = (index) => {
    if (!containerRef.current) return;

    // Check if the current index is the last one
    const isLast = maxNumber && maxNumber - 1 === index;

    // Determine the element to scroll into view
    const elementToScroll = isLast
      ? containerRef.current.children[maxNumber - 1]
      : containerRef.current.children[index + 1];

    // Scroll the element into view
    elementToScroll?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  };

  const Minus = (
    <Icon
      name={number ? 'circle_minus_fill' : 'circle_minus'}
      classes={cn(classNameDefault, number && 'cursor-pointer')}
      onClick={() => onChange('MINUS')}
    />
  );

  const Plus = (
    <Icon
      name='circle_plust_fill'
      classes={cn(classNameDefault, 'cursor-pointer')}
      onClick={() => onChange('PLUS')}
    />
  );

  return (
    <div
      className={cn(
        'flex cursor-pointer items-center md:gap-5 lg:gap-4',
        className,
      )}
    >
      {isMobile && isBottomSheet ? (
        <div
          className={cn(themeClassName.select_out)}
          onClick={handleChangeIsShowBottomSheet}
        >
          <div className={cn('b1_bold flex items-center text-text-tertiary')}>
            {label}
          </div>

          <Icon
            name='arrow_bottom'
            classes='before:text-stroke-tertiary text-xl lg:text-2xl'
          />
        </div>
      ) : (
        <>
          {Minus}
          <h6
            className={cn(
              'b1_bold min-w-[80px] text-center text-text-tertiary',
              number && 'text-text-primary',
            )}
          >
            {!number && label ? label : `${number} ${labelValue}`}
          </h6>
          {Plus}
        </>
      )}

      {
        // add swip change number
        isShowBottomSheet && (
          <BottomSheet
            onClose={handleChangeIsShowBottomSheet}
            label={`${t('select')} ${label}`}
          >
            <div className='relative flex w-full items-center justify-center gap-4 overflow-hidden rounded-xl bg-background-3 py-10'>
              {Minus}

              <h6
                className={cn(
                  't2_bold min-w-[120px] rounded-xl border border-stroke-secondary bg-background-2 py-2 text-center text-text-tertiary',
                  number && 'text-text-primary',
                )}
              >
                {number}
              </h6>

              {Plus}

              {maxNumber && (
                <div
                  ref={containerRef}
                  className={cn(
                    'absolute bottom-0 left-0 right-0 mx-auto flex h-[38px] flex-col items-center overflow-y-auto',

                    // maxNumber - 1 <= number && 'bottom-4 h-[20px]',
                    maxNumber === number && 'hidden',
                  )}
                >
                  {[...Array(maxNumber + 1).keys()].map((numberItem) => (
                    <h2
                      key={numberItem}
                      className='b1_regular text-text-secondary'
                    >
                      {numberItem}
                    </h2>
                  ))}
                </div>
              )}
            </div>
          </BottomSheet>
        )
      }
    </div>
  );
};

export default NumberStepper;
