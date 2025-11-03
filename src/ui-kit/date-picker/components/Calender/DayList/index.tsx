import moment from 'jalali-moment';
import { useTranslations } from 'next-intl';
import { FC, useCallback, useMemo } from 'react';

import { cn } from '@/libs/utils';

import { ETabDataPicker } from '@/ui-kit/date-picker/components/Calender/Calender';
import ICalender from '@/ui-kit/date-picker/components/Calender/CalenderTypes';
import {
  getDayListForMonth,
  weekdayList,
} from '@/ui-kit/date-picker/components/Calender/helpers';

// Define the shape of dayListItem
interface DayListItem {
  [key: string]: number; // Assuming each key is a string and maps to a number (the day of the month)
}

function convertToPersianWeekday(
  englishDay: string,
  locale: ICalender.TLocale,
): string {
  return moment(englishDay, 'ddd').locale(locale).format('dd');
}

const isDateInRange = (
  currentDate: moment.Moment,
  minDate: moment.Moment,
  maxDate: moment.Moment,
  isMaxDateCurrent: boolean,
): boolean => {
  const currentMoment = moment(currentDate);

  const isBeforeMinDate = currentMoment.isBefore(minDate, 'day');
  const isAfterMaxDate =
    isMaxDateCurrent && currentMoment.isAfter(maxDate, 'day');

  return !isBeforeMinDate && !isAfterMaxDate;
};

const isDateActive = (
  currentDate: moment.Moment,
  selectedMoment: moment.Moment | null,
  leavingDateMoment: moment.Moment | null,
): {
  isActiveDate: boolean;
  isLeavingDate: boolean | null;
  isLeavingDateMin: boolean | null;
} => {
  const currentMoment = moment(currentDate);

  if (!selectedMoment)
    return {
      isActiveDate: false,
      isLeavingDate: false,
      isLeavingDateMin: false,
    };

  const isActiveDate = currentMoment.isSame(selectedMoment, 'day');
  const isLeavingDate =
    leavingDateMoment && currentMoment.isSame(leavingDateMoment, 'day');
  const isLeavingDateMin =
    leavingDateMoment &&
    selectedMoment.isSameOrBefore(currentMoment, 'day') &&
    leavingDateMoment.isSameOrAfter(currentMoment, 'day');

  return { isActiveDate, isLeavingDate, isLeavingDateMin };
};

const DayList: FC<ICalender.IPropsSelectedItem> = ({
  dateSelected,
  handleChange,
  minDate,
  isMaxDateCurrent,
  locale,
  dateSelectedLeavingDate,
  initialValue,
  isShowTooltip,
}) => {
  const dayList = useMemo(
    () => getDayListForMonth(initialValue, locale),
    [initialValue, locale],
  );

  const t = useTranslations('Global');

  const sortedDayList = useMemo(() => {
    return Object.values(dayList)
      .map((day) => ({
        ...day,
        minValue: Math.min(...Object.values(day)),
      }))
      .sort((a, b) => a.minValue - b.minValue)
      .map((rest) => rest as DayListItem); // Avoid defining minValue
  }, [dayList]);

  const handleDayClick = useCallback(
    (day: number, isDisabled: boolean) => {
      if (!day || isDisabled) return;
      handleChange(ETabDataPicker.DAY, day);
    },
    [handleChange],
  );

  return (
    <div>
      <div className='grid grid-cols-7 border-b border-stroke-primary pb-2'>
        {weekdayList(locale).map((abbreviatedWeekday) => (
          <div
            key={abbreviatedWeekday}
            className='b2_regular gap-1 text-center text-text-primary'
          >
            {convertToPersianWeekday(abbreviatedWeekday, locale)}
          </div>
        ))}
      </div>
      <div>
        {sortedDayList.map((dayListItem, index) => (
          <div
            key={index}
            className='border-gray100 text-gray200 text-center text-[12px] md:py-0.5 lg:py-1'
          >
            <div className='grid grid-cols-7 gap-1'>
              {weekdayList(locale)?.map((dayItem) => {
                const initialMoment = moment(initialValue).locale(locale);
                const minMoment = moment(minDate).locale(locale);
                const currentMoment = moment().locale(locale);
                const selectedMoment = dateSelected
                  ? moment(dateSelected).locale(locale)
                  : null;
                const leavingDateMoment = dateSelectedLeavingDate
                  ? moment(dateSelectedLeavingDate).locale(locale)
                  : null;

                const day = dayListItem[dayItem]; // Now TypeScript knows dayListItem has string keys

                const currentDate = moment(initialMoment).date(day);

                const isHoliday = dayItem === 'Fri';
                const isDisabled = !isDateInRange(
                  currentDate,
                  minMoment,
                  currentMoment,
                  isMaxDateCurrent,
                );

                const { isActiveDate, isLeavingDate, isLeavingDateMin } =
                  isDateActive(currentDate, selectedMoment, leavingDateMoment);

                const isWay = leavingDateMoment
                  ? leavingDateMoment
                  : !dateSelected ||
                    (dateSelected &&
                      !leavingDateMoment &&
                      moment(
                        moment(
                          dateSelectedLeavingDate
                            ? dateSelectedLeavingDate
                            : initialValue,
                        )
                          .locale(locale)
                          .date(day as number),
                      ).isSameOrBefore(dateSelected, 'day'));

                return (
                  <div
                    key={dayItem}
                    className={cn(
                      'b1_bold relative flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-lg lg:h-[48px] lg:w-[48px] [&>.tooltip]:hover:!block',
                      isHoliday && 'text-error',
                      isDisabled
                        ? 'cursor-not-allowed text-stroke-primary'
                        : day &&
                            !isLeavingDateMin &&
                            !isActiveDate &&
                            'hover:bg-background-1',
                      isLeavingDateMin && '-mx-2 rounded-none bg-background-1',
                      isActiveDate &&
                        'mx-0 rounded-lg bg-stroke-tertiary text-text-static hover:border-transparent hover:text-text-static',
                      isActiveDate &&
                        isLeavingDateMin &&
                        'rounded-l rounded-r-lg',
                      isLeavingDate &&
                        'mx-0 rounded-l-lg rounded-r bg-stroke-tertiary text-text-static hover:border-transparent hover:text-text-static',
                    )}
                    onClick={() => handleDayClick(day, isDisabled)}
                  >
                    {day && !isDisabled && isShowTooltip && (
                      <div className='tooltip c1_bold absolute bottom-[calc(100%+8px)] z-10 hidden text-nowrap rounded-lg bg-stroke-tertiary px-7 py-4 text-text-static'>
                        {isWay ? t('entrance_date') : t('leaving_date')}
                      </div>
                    )}
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayList;
