import moment from 'jalali-moment';
import { FC } from 'react';

import { cn } from '@/libs/utils';

import { ETabDataPicker } from '@/ui-kit/date-picker/components/Calender/Calender';
import ICalender from '@/ui-kit/date-picker/components/Calender/CalenderTypes';
import { monthList } from '@/ui-kit/date-picker/components/Calender/helpers';

const MonthSelect: FC<ICalender.IPropsSelectedItem> = ({
  handleChange,
  dateSelected,
  minDate,
  isMaxDateCurrent,
  locale,
}) =>
  monthList(locale).map((monthItem, index) => {
    const disable =
      (dateSelected &&
        moment(dateSelected).year() === moment(minDate).locale(locale).year() &&
        index + 1 < moment(minDate).locale(locale).month()) ||
      (isMaxDateCurrent &&
        moment(dateSelected).year() ===
          moment(new Date()).locale(locale).year() &&
        index + 1 > moment(new Date()).locale(locale).month());

    return (
      <div
        key={monthItem}
        className={cn(
          'b2_bold flex items-center justify-center rounded-lg border py-3 text-text-primary',
          disable ? 'cursor-not-allowed' : 'cursor-pointer',
          moment(dateSelected).format('MMMM') === monthItem
            ? 'bg-stroke-tertiary text-text-static'
            : 'border-transparent hover:border-stroke-primary hover:bg-background-1',
        )}
        onClick={() => {
          handleChange(ETabDataPicker.MONTH, monthItem);
        }}
      >
        {monthItem}
      </div>
    );
  });

export default MonthSelect;
