import moment from 'jalali-moment';
import { FC } from 'react';

import { cn } from '@/libs/utils';

import { ETabDataPicker } from '@/ui-kit/date-picker/components/Calender/Calender';
import ICalender from '@/ui-kit/date-picker/components/Calender/CalenderTypes';
import { yearList } from '@/ui-kit/date-picker/components/Calender/helpers';

const YearSelect: FC<ICalender.IPropsSelectedItem> = ({
  handleChange,
  dateSelected,
  minDate,
  locale,
}) => (
  <>
    {yearList(minDate, locale).map((yearItem) => (
      <div
        key={yearItem}
        className={cn(
          'b2_bold cursor-pointer rounded-lg py-3 text-center text-text-primary',
          moment(dateSelected).year() === yearItem
            ? 'bg-stroke-tertiary text-text-static'
            : 'border-transparent hover:border-stroke-primary hover:bg-background-1',
        )}
        onClick={() => {
          handleChange(ETabDataPicker.YEAR, yearItem);
        }}
      >
        {yearItem}
      </div>
    ))}
  </>
);

export default YearSelect;
