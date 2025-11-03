export type TListIcon =
  | 'search'
  | 'circle_right'
  | 'circle_left'
  | 'circle_success_2'
  | 'dots'
  | 'checkbox_fill'
  | 'checkbox'
  | 'filter'
  | 'success'
  | 'user_3'
  | 'warning'
  | 'user'
  | 'user_2'
  | 'time'
  | 'pin'
  | 'payment'
  | 'linkdin'
  | 'instagram'
  | 'info'
  | 'error'
  | 'envelope'
  | 'envelope_2'
  | 'eject'
  | 'door'
  | 'description'
  | 'close'
  | 'arrow_left'
  | 'arrow_right'
  | 'arrow_top'
  | 'arrow_bottom'
  | 'circle_plust_fill'
  | 'circle_minus'
  | 'circle_minus_fill'
  | 'circle_close'
  | 'calendar'
  | 'arrow_right_2'
  | 'arrow_left_2'
  | 'aparat'
  | 'hamburger';

import React from 'react';

export interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: TListIcon;
  classes?: string;
}
