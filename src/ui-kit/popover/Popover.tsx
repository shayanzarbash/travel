import { FC, ReactNode } from 'react';

import { cn } from '@/libs/utils';

interface TPropsPopover {
  className?: string;
  children: ReactNode;
}

const Popover: FC<TPropsPopover> = ({ className, children }) => (
  <div
    className={cn(
      'absolute -left-2 right-0 top-[calc(100%+10px)] z-10 bg-background-2 p-3 shadow-black_1 md:rounded-xl lg:rounded-[20px] lg:p-6',
      className,
    )}
  >
    {children}
  </div>
);

export default Popover;
