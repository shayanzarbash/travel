'use client';

import { useState } from 'react';

import { cn } from '@/libs/utils';

const AccordionItem = ({
  title,
  content,
}: {
  title?: string;
  content?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='border-b border-background-3 py-8 pr-7 last:border-b-0'>
      <button
        onClick={() => setOpen(!open)}
        className='flex w-full items-center text-right'
      >
        <span
          className={cn(
            't1_regular text-stroke-static transition-transform duration-300',
            open && 'rotate-45',
          )}
        >
          +
        </span>
        <span className='pr-5 t2_regular text-stroke-static'>{title}</span>
      </button>
      {open && (
        <div className='t2_regular mt-3 text-stroke-static'>{content}</div>
      )}
    </div>
  );
};

export default AccordionItem;
