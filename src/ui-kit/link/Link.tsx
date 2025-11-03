'use client';

import LinkNext, { LinkProps } from 'next/link';
import { createElement, FC, ReactNode } from 'react';

interface TPropsLink extends LinkProps {
  isOnClick?: boolean;
  children?: ReactNode;
}

const Link: FC<TPropsLink> = ({ isOnClick, href, ...props }) => {
  // Ensure href is defined and not empty

  return createElement(isOnClick ? 'span' : LinkNext, {
    ...props,
    href: href || '',
  });
};

export default Link;
