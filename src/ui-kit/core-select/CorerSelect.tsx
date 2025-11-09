import { createElement, FC, FunctionComponent, useState } from 'react';

import { cn } from '@/libs/utils';

export interface TOption {
  value: string | number;
  title: string;
  children?: FunctionComponent;
}

interface TPropsCoreSelect {
  options: TOption[];
  selected?: string | number;
  onChange: (optionItem: TOption) => void;
}

const CorerSelect: FC<TPropsCoreSelect> = ({ options, selected, onChange }) => {

  return (
    options.map((optionItem) => (
      <div
        className={cn(
          'border-b border-stroke-primary py-2 text-b1_bold text-text-primary first:!pt-0 last:border-0 last:!pb-0',
        )}
        key={optionItem.value}
      >
        <h6
          className={cn(
            'b1_bold flex cursor-pointer items-center p-2 last:pb-2',
            selected === optionItem.value && 'rounded-lg bg-background-1',
          )}
          onClick={(e) => {
            e.stopPropagation();
            onChange(optionItem);
          }}
        >
          {optionItem.title}
          {optionItem.children && createElement(optionItem.children)}
        </h6>
      </div>
    ))
  )
}



export default CorerSelect;
