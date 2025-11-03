'use client';

import { useTranslations } from 'next-intl';
import { createElement, FC, useRef, useState } from 'react';

import useDeviceType from '@/hooks/useDeviceType';
import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/libs/utils';

import BottomSheet from '@/ui-kit/bottom-sheet/BottomSheet';
import CorerSelect, { TOption } from '@/ui-kit/core-select/CorerSelect';
import Icon from '@/ui-kit/icon/Icon';
import Popover from '@/ui-kit/popover/Popover';
import themeClassName from '@/ui-kit/themeClassName';

import { IGlobal } from '@/types/types-global';

interface TArg {
  name: string | null;
  value: TOption;
}

interface TPropsSelect {
  label: string;
  name?: string;
  className?: string;
  options: TOption[];
  handleChange?: (option: TArg) => void;
}

const Select: FC<TPropsSelect> = ({
  label,
  className,
  name,
  options,
  handleChange,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isShow, onToggleIsShow] = useState<boolean>(false);
  const [selected, onSelected] = useState<TOption>();

  const t = useTranslations('Global');
  const { isMobile } = useDeviceType();

  const onClose: IGlobal.TFunctionVoid = () => onToggleIsShow(false);

  const onChange = (optionItem: TOption): void => {
    onSelected(optionItem);
    handleChange &&
      handleChange({
        name: name ?? null,
        value: optionItem,
      });
    onClose();
  };

  useOutsideClick(wrapperRef, () => {
    !isMobile && onClose();
  });

  return (
    <div
      className={cn(themeClassName.select_out, 'md:border-0 md:p-0', className)}
      onClick={() => {
        if (isMobile && isShow) return;
        onToggleIsShow((prevState) => !prevState);
      }}
      ref={wrapperRef}
    >
      <h6
        className={cn(
          'b1_bold flex justify-center text-text-tertiary',
          selected && 'flex-col',
        )}
      >
        {(!isMobile || !selected) && label}
        {selected && (
          <span className='b1_bold text-text-primary'>{selected.title}</span>
        )}
      </h6>

      <Icon
        name='arrow_bottom'
        classes='before:text-stroke-tertiary text-xl lg:text-2xl'
      />
      {isShow &&
        (isMobile ? (
          <BottomSheet label={`${t('select')} ${label}`} onClose={onClose}>
            {options.map((optionItem) => (
              <h6
                className='b1_bold flex items-center gap-1 border-b border-stroke-primary py-4 text-text-primary last:border-b-0'
                key={optionItem.value}
                onClick={() => onChange(optionItem)}
              >
                {optionItem.children && createElement(optionItem.children)}
                {optionItem.title}
              </h6>
            ))}
          </BottomSheet>
        ) : (
          <Popover className='!top-[calc(100%+12px)] lg:!top-[calc(100%+25px)]'>
            <CorerSelect
              options={options}
              onChange={onChange}
              selected={selected?.value}
            />
          </Popover>
        ))}
    </div>
  );
};

export default Select;
