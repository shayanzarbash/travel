import moment from 'jalali-moment';
import momentG from 'moment';
import { Moment } from 'moment/moment';

import ICalender from '@/ui-kit/date-picker/components/Calender/CalenderTypes';

export const monthList = (locale: ICalender.TLocale): string[] =>
  Array.apply(0, Array(12)).map(function (_, i) {
    return moment().locale(locale).month(i).format('MMMM');
  });

export const yearList = (
  minDate: string,
  locale: ICalender.TLocale,
): number[] => {
  const minDateMoment = moment(minDate).locale(locale);
  const currentDateMoment = moment(new Date()).locale(locale);
  const diff = minDateMoment.locale('en').diff(currentDateMoment, 'years');

  return Array.from(
    {
      length: diff
        ? (diff < 0 ? -diff : diff) + 1
        : minDateMoment.locale(locale).year() -
          (minDateMoment.locale(locale).year() - 16) +
          1,
    },
    (_, index) => {
      return minDateMoment.locale(locale).year() + index;
    },
  );
};

export function getDayListForMonth(
  dateSelected: Moment,
  locale: ICalender.TLocale,
): Record<number, ICalender.IDayList> {
  const dayList: Record<number, ICalender.IDayList> = {};
  const year = dateSelected?.year();
  const month = dateSelected?.month();

  let currentWeekNumber: number | undefined;

  if (locale === 'en') {
    const date = moment([year, month, 1]);

    while (date.month() === month) {
      const dayName = date.format('ddd');
      const dayNumber = date.date();
      const dayWeek = date.isoWeek();

      if (!currentWeekNumber) {
        currentWeekNumber = dayWeek;
      }

      if (!dayList[currentWeekNumber]) {
        dayList[currentWeekNumber] = {};
      }

      dayList[currentWeekNumber][dayName] = dayNumber;

      if (dayName === 'Fri') {
        currentWeekNumber = dayWeek + 1;
      }

      date.add(1, 'days');
    }
  } else {
    const date = moment(
      `${year}-${dateSelected?.format('MM')}-01`,
      'jYYYY-jMM-jDD',
    ).locale(locale);

    while (date.month() === month) {
      const dayNumber = date.date();
      const dayWeek = date.isoWeek();

      if (!currentWeekNumber) {
        currentWeekNumber = dayWeek;
      }

      if (!dayList[currentWeekNumber]) {
        dayList[currentWeekNumber] = {};
      }

      const dayNameGeorgian = moment(date).locale('en').format('ddd');
      dayList[currentWeekNumber][dayNameGeorgian] = dayNumber;

      if (dayNameGeorgian === 'Fri') {
        currentWeekNumber = dayWeek + 1;
      }

      date.add(1, 'days');
    }
  }

  return dayList;
}

export const weekdayList = (locale: ICalender.TLocale): string[] => {
  const abbreviatedWeekdays = momentG.weekdaysShort();
  const startIndex = abbreviatedWeekdays.indexOf(
    locale === 'fa' ? 'Sta' : 'Mon',
  );
  return [
    ...abbreviatedWeekdays.slice(startIndex),
    ...abbreviatedWeekdays.slice(0, startIndex),
  ];
};
