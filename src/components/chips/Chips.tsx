import { FC } from 'react';

interface TPropsChips {
  text: string;
}

const Chips: FC<TPropsChips> = ({ text }) => (
  <div className='b2_regular rounded-full border border-stroke-primary px-3 py-0.5 text-text-primary'>
    {text}
  </div>
);

export default Chips;
