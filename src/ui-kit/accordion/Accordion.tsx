'use client';

import { FC, ReactNode, useState } from 'react';

import { cn } from '@/libs/utils';

import Icon from '@/ui-kit/icon/Icon';

interface TPropsAccordion {
  label: string;
  children: ReactNode;
  initialIsOpen?: boolean;
}

const Accordion: FC<TPropsAccordion> = ({
  label,
  initialIsOpen = true,
  children,
}) => {
  const [isOpen, onToggleIsOpen] = useState(initialIsOpen);

  const handleIsOpen = (): void => onToggleIsOpen((prevState) => !prevState);

  return (
    <div>
      <div
        onClick={handleIsOpen}
        className='flex cursor-pointer items-center justify-between'
      >
        <h6
          className={cn(
            'b1_bold relative text-text-primary',
            'after:absolute after:-left-3 after:bottom-0 after:top-0 after:my-auto after:h-1 after:w-1 after:rounded-full after:bg-stroke-orange',
          )}
        >
          {label}
        </h6>
        <Icon
          name='arrow_bottom'
          classes={cn('text-2xl transition-transform', isOpen && 'rotate-180')}
        />
      </div>

      <div
        className={cn(
          'transition-height h-0 opacity-0',
          isOpen && 'opacity-1 h-full pt-2 lg:pt-4',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
