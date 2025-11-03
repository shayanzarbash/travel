import moment from 'moment';
import { Dispatch, React, SetStateAction } from 'react';

import { SelectDatepickerLabels } from '@/ui/SelectDatePicker/types/SelectDatepickerLabels';

import { ETabDataPicker } from './Calender';

declare namespace ICalender {
  type TFormat = 'day' | 'month' | 'year';
  type TLocale = 'fa' | 'en';
  type TValue = moment;
  interface TTarget {
    name?: string;
    entrance_date: TValue | null;
    leaving_date: TValue | null;
  }

  interface IProps {
    id?: string;
    className?: string;
    minDate?: string;
    maxDate?: Date;
    selectedDate?: moment.Moment | undefined;
    labels?: SelectDatepickerLabels;
    disabled?: boolean;
    hasError?: boolean;
    monthRef?: React.LegacyRef<HTMLSelectElement>;
    yearRef?: React.LegacyRef<HTMLSelectElement>;
    dayRef?: React.LegacyRef<HTMLSelectElement>;
    reverseYears?: boolean;
    hideLabels?: boolean;
    format?: TFormat[];
    errorMessage?: string;
    initialValue?: TValue;
    onChange?: (event: TTarget) => void;
    isMaxDateCurrent?: boolean;
    isGregorian?: boolean;
    isSelectEntranceDate?: boolean;
    onChangeIsSelectEntranceDate?: Dispatch<SetStateAction<boolean>>;
    dateSelected?: moment;
    onChangeSelectDate?: Dispatch<SetStateAction<moment>>;
    dateSelectedLeavingDate?: moment;
    onChangeSelectLeavingDate?: Dispatch<SetStateAction<moment>>;
    isShowTooltip?: boolean;
    isChangeMonth?: boolean;
    isChangeYear?: boolean;
    type?: 'SINGLE_DATE' | 'TWO_DATE';
  }

  interface IDay {
    id: number;
    title: string;
    slug: string;
  }

  interface IPropsSelectedItem
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
    handleChange: (tab: ETabDataPicker, value: number | string) => void;
    dateSelected: moment;
    dateSelectedLeavingDate: moment;
    minDate: string;
    isMaxDateCurrent: boolean;
    locale: TLocale;
    isSelectEntranceDate?: boolean;
    initialValue: moment;
    isShowTooltip?: boolean;
  }

  interface IDayList {
    [dayName: string]: number;
  }
}

export default ICalender;
