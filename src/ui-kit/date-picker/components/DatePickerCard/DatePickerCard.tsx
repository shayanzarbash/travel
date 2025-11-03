import moment from 'jalali-moment';
import { useTranslations } from 'next-intl';
import { FC, useMemo, useState } from 'react';

import { cn } from '@/libs/utils';

import Button from '@/ui-kit/button/Button';
import Calender from '@/ui-kit/date-picker/components/Calender/Calender';
import Icon from '@/ui-kit/icon/Icon';

const disableClass = 'border-stroke-secondary text-text-tertiary';

export interface TOnChangeDatePickerCard {
  dateSelected: moment.Moment | undefined;
  dateSelectedLeavingDate: moment.Moment | undefined;
}

interface TDatePickerCard {
  onClose: () => void;
  onChange: (date: TOnChangeDatePickerCard) => void;
}

const DatePickerCard: FC<TDatePickerCard> = ({ onClose, onChange }) => {
  const t = useTranslations('Global');

  const [isSelectEntranceDate, onChangeIsSelectEntranceDate] = useState(false);
  const [dateSelected, onChangeSelectDate] = useState();
  const [dateSelectedLeavingDate, onChangeSelectLeavingDate] = useState();

  const [rightMonth, onChangeRightMonth] = useState(moment(new Date()));

  const isDisablePrevMonth = useMemo(
    () =>
      moment(rightMonth).locale('fa').year() ===
        moment(new Date()).locale('fa').year() &&
      moment(new Date()).locale('fa').format('jMM') ===
        moment(rightMonth).locale('fa').format('jMM'),
    [rightMonth],
  );

  const onChangeNextMonth = (): void => {
    onChangeRightMonth((prevState) => moment(prevState).add(1, 'month'));
  };

  const onChangePrevMonth = (): void => {
    if (!isDisablePrevMonth) {
      onChangeRightMonth((prevState) => moment(prevState).subtract(1, 'month'));
    }
  };

  const onVerify = (): void => {
    onChange({
      dateSelected,
      dateSelectedLeavingDate,
    });
    onClose();
  };

  return (
    <>
      <div className='rounded-2xl bg-background-2'>
        <div className='mb-4 hidden border-b border-stroke-primary pb-4 md:block'>
          <h6 className='b1_bold text-text-primary'>{t('go_to_today')}</h6>
        </div>
        <div className='relative flex max-h-[calc(60vh)] flex-col items-start justify-between md:h-full md:max-h-full md:flex-row md:gap-4 lg:gap-10'>
          <div
            className='absolute left-0 hidden cursor-pointer items-center gap-2 md:flex'
            onClick={onChangeNextMonth}
          >
            <h6 className='b2_bold text-text-orange'>{t('next_month')}</h6>
            <Icon name='circle_left' classes='text-text-orange' />
          </div>
          <div
            className={cn(
              'absolute right-0 hidden cursor-pointer items-center gap-2 md:flex',

              isDisablePrevMonth && 'cursor-default opacity-65',
            )}
            onClick={onChangePrevMonth}
          >
            <Icon name='circle_right' classes='text-text-orange' />
            <h6 className='b2_bold text-text-orange'>{t('prev_month')}</h6>
          </div>
          <Calender
            initialValue={rightMonth}
            isSelectEntranceDate={isSelectEntranceDate}
            onChangeIsSelectEntranceDate={onChangeIsSelectEntranceDate}
            dateSelected={dateSelected}
            onChangeSelectDate={onChangeSelectDate}
            dateSelectedLeavingDate={dateSelectedLeavingDate}
            onChangeSelectLeavingDate={onChangeSelectLeavingDate}
            isShowTooltip
            type='TWO_DATE'
          />
          <Calender
            initialValue={moment(rightMonth).add(1, 'month')}
            isSelectEntranceDate={isSelectEntranceDate}
            onChangeIsSelectEntranceDate={onChangeIsSelectEntranceDate}
            dateSelected={dateSelected}
            onChangeSelectDate={onChangeSelectDate}
            dateSelectedLeavingDate={dateSelectedLeavingDate}
            onChangeSelectLeavingDate={onChangeSelectLeavingDate}
            isShowTooltip
            type='TWO_DATE'
          />
        </div>

        <div className='mt-4 flex flex-col items-center gap-2 border-stroke-primary pt-4 text-text-primary md:flex-row md:border-t'>
          <div className='hidden flex-1 items-center gap-3 md:flex lg:gap-4'>
            <div className='flex items-center gap-2'>
              <h6 className='b1_regular text-text-secondary'>
                {t('entrance_date')}
              </h6>
              {dateSelected ? (
                <h6 className='t2_bold text-text-primary'>
                  {dateSelected &&
                    moment(dateSelected).locale('fa').format('ddd jDD  jMMMM')}
                </h6>
              ) : (
                <h6 className='b1_regular text-text-tertiary'>
                  {t('selected')}
                </h6>
              )}
            </div>
            -
            <div className='flex items-center gap-2'>
              <h6 className='b1_regular text-text-secondary'>
                {t('leaving_date')}
              </h6>
              {dateSelectedLeavingDate ? (
                <h6 className='t2_bold text-text-primary'>
                  {dateSelectedLeavingDate &&
                    moment(dateSelectedLeavingDate)
                      .locale('fa')
                      .format('ddd jDD  jMMMM')}
                </h6>
              ) : (
                <h6 className='b1_regular text-text-tertiary'>
                  {t('selected')}
                </h6>
              )}
            </div>
          </div>

          <div className='gap grid w-full grid-cols-2 gap-2 md:hidden'>
            <Button
              typeColor='secondary'
              className={cn(
                'rounded-xl bg-background-1 py-3',
                dateSelectedLeavingDate && disableClass,
              )}
            >
              {t('entrance_date')}
            </Button>
            <Button
              typeColor='secondary'
              className={cn(
                'rounded-xl bg-background-1 py-3',
                !dateSelectedLeavingDate && disableClass,
              )}
            >
              {t('leaving_date')}
            </Button>
          </div>
          <Button
            onClick={onVerify}
            className='w-full md:mr-auto md:w-auto md:!px-12 lg:!px-20'
          >
            {t('verify')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default DatePickerCard;
