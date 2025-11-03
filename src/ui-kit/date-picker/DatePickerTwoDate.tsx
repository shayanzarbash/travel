import moment from 'jalali-moment';
import { useTranslations } from 'next-intl';
import { FC, useRef, useState } from 'react';

import useDeviceType from '@/hooks/useDeviceType';
import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/libs/utils';

import BottomSheet from '@/ui-kit/bottom-sheet/BottomSheet';
import DatePickerCard, {
  TOnChangeDatePickerCard,
} from '@/ui-kit/date-picker/components/DatePickerCard/DatePickerCard';
import Icon from '@/ui-kit/icon/Icon';
import Popover from '@/ui-kit/popover/Popover';
import themeClassName from '@/ui-kit/themeClassName';

import { IGlobal } from '@/types/types-global';

interface TDatePicker {
  className?: string;
  label: string;
}

const DatePickerTwoDate: FC<TDatePicker> = ({ className, label }) => {
  const [isShow, onToggleIsShow] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Global');
  const [dateSelected, onChangeSelectDate] = useState<moment.Moment>();
  const [dateSelectedLeavingDate, onChangeSelectLeavingDate] =
    useState<moment.Moment>();

  const onChange = (date: TOnChangeDatePickerCard): void => {
    date.dateSelected && onChangeSelectDate(date.dateSelected);
    date.dateSelectedLeavingDate &&
      onChangeSelectLeavingDate(date.dateSelectedLeavingDate);
  };

  const onClose: IGlobal.TFunctionVoid = (): void => onToggleIsShow(false);

  const { isMobile } = useDeviceType();

  useOutsideClick(wrapperRef, () => {
    !isMobile && onClose();
  });

  return (
    <div className='flex items-center' ref={wrapperRef}>
      <div
        className={cn(
          themeClassName.select_out,
          'static md:border-0 md:p-0',
          className,
        )}
        onClick={() => {
          if (isMobile && isShow) return;
          onToggleIsShow((prevState) => !prevState);
        }}
      >
        <h6
          className={cn(
            'flex justify-center gap-1 text-text-tertiary',
            dateSelected ? 'b2_bold flex-col' : 'b1_bold',
          )}
        >
          {(!isMobile || !dateSelected) && label}
          {dateSelected && (
            <div className='b1_bold flex items-center gap-1 text-text-primary'>
              {dateSelected?.format('jDD jMMMM')}
              {dateSelectedLeavingDate && <Icon name='arrow_left_2' />}
              {dateSelectedLeavingDate?.format('jDD jMMMM')}
            </div>
          )}
        </h6>

        <Icon
          name='arrow_bottom'
          classes='before:text-stroke-tertiary mr-4 text-xl lg:text-2xl'
        />
      </div>

      {isShow && isMobile ? (
        <BottomSheet label={t('select_date')} onClose={onClose}>
          <DatePickerCard onChange={onChange} onClose={onClose} />
        </BottomSheet>
      ) : (
        <Popover className='!top-[calc(100%+12px)] !w-full lg:!top-[calc(100%+4px)]'>
          <DatePickerCard onChange={onChange} onClose={onClose} />
        </Popover>
      )}
    </div>
  );
};

export default DatePickerTwoDate;
