import moment from 'jalali-moment';
import { createElement, FC, useEffect, useMemo, useState } from 'react';

import { cn } from '@/libs/utils';

import ICalender from '@/ui-kit/date-picker/components/Calender/CalenderTypes';
import Icon from '@/ui-kit/icon/Icon';

import DayList from './DayList';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';

export enum ETabDataPicker {
  YEAR = 'YEAR',
  MONTH = 'MONTH',
  DAY = 'DAY',
}

const tabs = {
  [ETabDataPicker.YEAR]: {
    title: 'year',
    className: 'grid grid-cols-6 gap-2 overflow-auto max-h-[246px]',
    dir: 'ltr',
    Component: YearSelect,
  },
  [ETabDataPicker.MONTH]: {
    title: 'month',
    className: 'grid grid-cols-3 gap-5',
    dir: 'rtl',

    Component: MonthSelect,
  },
  [ETabDataPicker.DAY]: {
    title: 'day',
    className: 'flex flex-col',
    dir: 'rtl',
    Component: DayList,
  },
};

export interface ITabSelected {
  [ETabDataPicker.YEAR]: boolean;
  [ETabDataPicker.MONTH]: boolean;
  [ETabDataPicker.DAY]: boolean;
}

const Calender: FC<ICalender.IProps> = ({
  minDate = moment(new Date()).format('YYYY-MM-DD'),
  onChange,
  format = ['year', 'month', 'day'],
  isGregorian = false,
  initialValue,
  isSelectEntranceDate,
  dateSelected,
  onChangeSelectDate,
  dateSelectedLeavingDate,
  isMaxDateCurrent = false,
  onChangeSelectLeavingDate,
  isShowTooltip = false,
  isChangeMonth = false,
  isChangeYear = false,
  className: classNameMain,
  type = 'SINGLE_DATE',
}) => {
  const [tabActive, onChangeTabActive] = useState<ETabDataPicker>(
    ETabDataPicker.DAY,
  );
  const isGregorianState = isGregorian;
  const locale: ICalender.TLocale = isGregorianState ? 'en' : 'fa';

  const { Component, className, dir } = tabs[tabActive];

  const handleChange = (tab: ETabDataPicker, value: string | number): void => {
    switch (tab) {
      case ETabDataPicker.YEAR: {
        onChangeSelectDate &&
          onChangeSelectDate(() =>
            moment(dateSelected)
              .locale(locale)
              .year(value as number),
          );

        if (format.includes('month')) {
          onChangeTabActive(ETabDataPicker.MONTH);
        }
        break;
      }

      case ETabDataPicker.MONTH: {
        onChangeSelectDate &&
          onChangeSelectDate(() =>
            moment(dateSelected)
              .locale(locale)
              .month(value as number),
          );

        if (format.includes('day')) {
          onChangeTabActive(ETabDataPicker.DAY);
        }
        break;
      }
      case ETabDataPicker.DAY: {
        const isBefore =
          isMaxDateCurrent ||
          moment(
            dateSelectedLeavingDate ? dateSelectedLeavingDate : initialValue,
          )
            .locale(locale)
            .date(value as number)
            .isSameOrBefore(dateSelected, 'day');

        if (dateSelectedLeavingDate || !dateSelected || isBefore) {
          onChangeSelectDate &&
            onChangeSelectDate(() =>
              moment(
                type === 'SINGLE_DATE'
                  ? dateSelected || initialValue
                  : initialValue,
              )
                .locale(locale)
                .date(value as number),
            );
          onChangeSelectLeavingDate && onChangeSelectLeavingDate(null);
        } else if (dateSelected) {
          onChangeSelectLeavingDate &&
            onChangeSelectLeavingDate(() =>
              moment(
                dateSelectedLeavingDate
                  ? dateSelectedLeavingDate
                  : initialValue,
              )
                .locale(locale)
                .date(value as number),
            );
        }

        break;
      }
    }
  };

  const genDate = useMemo(() => {
    return (
      <>
        <span>{initialValue?.locale(locale).format('YYYY')}</span>
        <span>{initialValue?.locale(locale).format('MMMM')}</span>
      </>
    );
  }, [initialValue, locale]);

  useEffect(() => {
    onChange &&
      onChange({
        entrance_date: dateSelected
          ? moment(dateSelected, 'YYYY-MM-DD').locale('en').format('YYYY-MM-DD')
          : null,
        leaving_date: dateSelectedLeavingDate
          ? moment(dateSelectedLeavingDate, 'YYYY-MM-DD')
              .locale('en')
              .format('YYYY-MM-DD')
          : null,
      });
  }, [dateSelected, dateSelectedLeavingDate, onChange]);

  // useEffect(() => {
  //   onChangeTabActive(ETabDataPicker.DAY);
  //   dateSelected &&
  //     onChangeSelectDate(
  //       (moment(valueInitial).isValid() && moment(valueInitial).locale('en')) ||
  //         moment(new Date()),
  //     );
  //   onChangeTabSelected(initialStateTabSelected);
  // }, [isGregorianState]);

  return (
    <>
      <div className={cn('flex w-full justify-center', classNameMain)}>
        <div
          className={'flex w-full flex-col items-center justify-center gap-2'}
        >
          {isChangeMonth || isChangeYear ? (
            <div className='flex items-center gap-2'>
              {tabActive === ETabDataPicker.DAY && isChangeMonth && (
                <div
                  className='b1_bold flex cursor-pointer items-center gap-1 rounded bg-background-1 px-2 py-1'
                  onClick={() => onChangeTabActive(ETabDataPicker.MONTH)}
                >
                  {(dateSelected || initialValue) &&
                    moment(dateSelected || initialValue)
                      .locale(locale)
                      .format('jMMMM')}
                  <Icon name='arrow_bottom' classes='text-2xl' />
                </div>
              )}
              {tabActive !== ETabDataPicker.YEAR && isChangeYear && (
                <div
                  className='b1_bold flex cursor-pointer items-center gap-1 rounded bg-background-1 px-2 py-1'
                  onClick={() => onChangeTabActive(ETabDataPicker.YEAR)}
                >
                  {(dateSelected || initialValue) &&
                    moment(dateSelected || initialValue)
                      .locale(locale)
                      .format('jYYYY')}
                  <Icon name='arrow_bottom' classes='text-2xl' />
                </div>
              )}

              {tabActive === ETabDataPicker.YEAR && (
                <h6 className='b2_regular text-text-tertiary'>
                  سال تولد خود را انتخاب کنید
                </h6>
              )}
            </div>
          ) : (
            <h6
              className='b1_bold flex justify-center gap-0.5 text-center text-text-primary'
              dir='ltr'
            >
              {genDate}
            </h6>
          )}

          <div className={cn('mt-2 w-full', className)} dir={dir}>
            {createElement(Component, {
              handleChange,
              dateSelected,
              isMaxDateCurrent,
              minDate: moment(minDate, 'YYYY-MM-DD').format('YYYY-MM-DD'),
              locale,
              isSelectEntranceDate,
              dateSelectedLeavingDate,
              initialValue:
                type === 'SINGLE_DATE'
                  ? dateSelected || initialValue
                  : initialValue,
              isShowTooltip,
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calender;
