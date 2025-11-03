import { FC, ReactNode } from 'react';

import { cn } from '@/libs/utils';

interface TPropsCard {
  children: ReactNode;
  className: string;
}

const CardWhite: FC<TPropsCard> = ({ children, className }) => (
  <section
    className={cn(
      'flex flex-col rounded-lg bg-background-2 p-3 md:rounded-xl lg:rounded-[20px] lg:p-6',
      className,
    )}
  >
    {children}
  </section>
);

export default CardWhite;
