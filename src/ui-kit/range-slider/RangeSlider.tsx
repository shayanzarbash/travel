import { useTranslations } from 'next-intl';
import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { separator } from '@/libs/formatter';
import { cn } from '@/libs/utils';

type TOnChange = (data: { min: number; max: number }) => void;

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: TOnChange;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);
  const t = useTranslations('Global');
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.right = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className='flex items-center justify-center'>
      <div className='relative w-full pb-10 pt-2'>
        <input
          type='range'
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={cn(
            'thumb pointer-events-none absolute h-0 w-full appearance-none outline-none',
            {
              'z-5': minVal > max - 100,
              'z-3': minVal <= max - 100,
            },
          )}
          aria-label='Minimum value'
        />
        <input
          type='range'
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className='thumb z-4 pointer-events-none absolute h-0 w-full appearance-none outline-none'
          aria-label='Maximum value'
        />
        <div className='relative -mt-[1px] rounded-full'>
          <div className='z-1 absolute h-2 w-full rounded-full bg-stroke-primary' />
          <div
            ref={range}
            className='z-2 absolute h-2 rounded-full bg-stroke-tertiary'
          />
        </div>
        <div className='relative mt-1'>
          <div className='t2_bold absolute right-1 top-4 text-xs text-text-primary'>
            {t('from')} {separator(minVal)}
          </div>
          <div className='t2_bold absolute left-1 top-4 text-xs text-text-primary'>
            {t('up_to')} {separator(maxVal)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
