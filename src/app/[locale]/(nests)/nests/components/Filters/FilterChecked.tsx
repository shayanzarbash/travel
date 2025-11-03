'use client';

import { FC } from 'react';

import Accordion from '@/ui-kit/accordion/Accordion';
import CheckBox from '@/ui-kit/check-box/CheckBox';

interface TPropsFilterChecked {
  label: string;
  list: { title: string; suffix?: string }[];
}

const FilterChecked: FC<TPropsFilterChecked> = ({ list, label }) => {
  return (
    <Accordion label={label}>
      <ul className='flex flex-col gap-4'>
        {list.map((listItem) => (
          <li key={listItem.title} className='flex justify-between'>
            <CheckBox onChange={() => {}} label={listItem.title} />
            <h6 className='b2_regular text-text-secondary'>
              {listItem.suffix}
            </h6>
          </li>
        ))}
      </ul>
    </Accordion>
  );
};

export default FilterChecked;
