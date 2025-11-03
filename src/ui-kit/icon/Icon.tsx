import React, { ReactNode, Ref } from 'react';

import '@/styles/icon.css';

import { IconProps, TListIcon } from './Icon.types';

const iconPretext = 'icon-';

export const IconList: Record<TListIcon, ReactNode> = {
  search: <span className={`${iconPretext}search`} />,
  circle_right: <span className={`${iconPretext}circle_right`} />,
  circle_left: <span className={`${iconPretext}circle_left`} />,
  circle_success_2: (
    <span className={`${iconPretext}circle_success_2`}>
      <span className='path1'></span>
      <span className='path2'></span>
      <span className='path3'></span>
    </span>
  ),
  dots: <span className={`${iconPretext}dots`} />,
  checkbox_fill: (
    <span className={`${iconPretext}checkbox_fill`}>
      <span className='path1'></span>
      <span className='path2'></span>
      <span className='path3'></span>
      <span className='path4'></span>
    </span>
  ),
  checkbox: <span className={`${iconPretext}checkbox`} />,
  filter: <span className={`${iconPretext}filter`} />,
  success: <span className={`${iconPretext}success`} />,
  user_3: <span className={`${iconPretext}user_3`} />,
  warning: <span className={`${iconPretext}warning`} />,
  user: <span className={`${iconPretext}user`} />,
  user_2: <span className={`${iconPretext}user_2`} />,
  time: <span className={`${iconPretext}time`} />,
  pin: <span className={`${iconPretext}pin`} />,
  payment: <span className={`${iconPretext}payment`} />,
  linkdin: <span className={`${iconPretext}linkdin`} />,
  instagram: <span className={`${iconPretext}instagram`} />,
  info: <span className={`${iconPretext}info`} />,
  error: <span className={`${iconPretext}error`} />,
  envelope: <span className={`${iconPretext}envelope`} />,
  envelope_2: <span className={`${iconPretext}envelope_2`} />,
  eject: <span className={`${iconPretext}eject`} />,
  door: <span className={`${iconPretext}door`} />,
  description: <span className={`${iconPretext}description`} />,
  close: <span className={`${iconPretext}close`} />,
  arrow_left: <span className={`${iconPretext}arrow_left`} />,
  arrow_right: <span className={`${iconPretext}arrow_right`} />,
  arrow_top: <span className={`${iconPretext}arrow_top`} />,
  arrow_bottom: <span className={`${iconPretext}arrow_bottom`} />,
  circle_plust_fill: <span className={`${iconPretext}circle_plust_fill`} />,
  circle_minus: <span className={`${iconPretext}circle_minus`} />,
  circle_minus_fill: <span className={`${iconPretext}circle_minus_fill`} />,
  circle_close: <span className={`${iconPretext}circle_close`} />,
  calendar: <span className={`${iconPretext}calendar`} />,
  arrow_right_2: <span className={`${iconPretext}arrow_right_2`} />,
  arrow_left_2: <span className={`${iconPretext}arrow_left_2`} />,
  aparat: <span className={`${iconPretext}aparat`} />,
  hamburger: <span className={`${iconPretext}hamburger`} />,
};

const Icon = React.forwardRef(
  ({ name, classes, ...props }: IconProps, ref: Ref<HTMLElement>) => {
    let result = IconList[name];

    if (React.isValidElement(result)) {
      result = React.cloneElement(
        result as React.ReactElement<
          React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLSpanElement>,
            HTMLSpanElement
          >
        >,
        {
          className: `${(result as React.ReactElement<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>).props.className ?? ''} ${classes}`,
          ref,
          ...props,
        },
      );
    }

    return result as React.ReactElement;
  },
);

Icon.displayName = 'Icon';

export default Icon;
