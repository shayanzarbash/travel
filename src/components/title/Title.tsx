import { FC } from 'react';

import Icon from '@/ui-kit/icon/Icon';
import { TListIcon } from '@/ui-kit/icon/Icon.types';

interface TPropsTitle {
  icon: TListIcon;
  text: string;
}

const Title: FC<TPropsTitle> = ({ icon, text }) => (
  <div className='flex items-center gap-1'>
    <Icon name={icon} classes='text-2xl text-stroke-tertiary' />
    <h6 className='b1_bold text-text-primary'>{text}</h6>
  </div>
);

export default Title;
