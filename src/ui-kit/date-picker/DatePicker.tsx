import moment from 'jalali-moment';
import { useTranslations } from 'next-intl';
import { FC, useRef, useState } from 'react';

import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/libs/utils';

import Button from '@/ui-kit/button/Button';
import Calender from '@/ui-kit/date-picker/components/Calender/Calender';
import Icon from '@/ui-kit/icon/Icon';
import Popover from '@/ui-kit/popover/Popover';

interface TPropsDatePicker {
  defaultValue?: string;
  label: string;
}

const DatePicker: FC<TPropsDatePicker> = ({ label }) => {
  const t = useTranslations('Global');

  const [isShowCalender, setIsShowCalender] = useState(false);
  const [value, onChangeValue] = useState<moment.Moment>();

  const onToggleIsShowCalender = (): void =>
    setIsShowCalender((prevState) => !prevState);
  const onHide = (): void => setIsShowCalender(false);

  const [dateSelected, onChangeSelectDate] = useState();
  const onVerify = (): void => {
    onChangeValue(dateSelected);
    onHide();
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClick(wrapperRef, () => {
    onHide();
  });

  return (
    <div className='relative' ref={wrapperRef}>
      <div
        className={cn(
          'b2_regular flex w-full cursor-pointer justify-between rounded-xl border border-stroke-fourth px-4 py-3 transition duration-300 ease-in',
          'focus:border-stroke-tertiary',
        )}
        onClick={onToggleIsShowCalender}
      >
        <h6 className={cn(value && 'b2_bold text-text-primary')}>
          {value?.locale('fa').format('jDD jMMMM  jYYYY') ?? label}
        </h6>
        <Icon name='arrow_bottom' classes='text-2xl' />
      </div>
      {isShowCalender && (
        <Popover className='flex w-[424px] flex-col gap-5'>
          <Calender
            initialValue={value ?? moment('1990-01-01', 'YYYY-MMMM-DD')}
            isMaxDateCurrent
            minDate='1940-01-01'
            isChangeMonth
            isChangeYear
            onChangeSelectDate={onChangeSelectDate}
            dateSelected={dateSelected}
          />
          <Button type='button' onClick={onVerify} className='w-full'>
            {t('verify')}
          </Button>
        </Popover>
      )}
    </div>
  );
};

export default DatePicker;
