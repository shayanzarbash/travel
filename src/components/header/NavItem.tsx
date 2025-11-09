'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { createElement, FC, FunctionComponent, useRef, useState } from 'react';

import useOutsideClick from '@/hooks/useOutsideClick';

import CorerSelect, { TOption } from '@/ui-kit/core-select/CorerSelect';
import Icon from '@/ui-kit/icon/Icon';
import Popover from '@/ui-kit/popover/Popover';

import { IGlobal } from '@/types/types-global';

interface TNavItem {
  title: string;
  link?: string;
  children?: FunctionComponent;
  sub_menu?: TNavItem[];
}

const NavItem: FC<TNavItem> = ({ title, children, sub_menu }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const t = useTranslations('Header.nav_bar');
  const [isShow, onToggleIsShow] = useState(false);
  const router = useRouter();
  const onClose: IGlobal.TFunctionVoid = () => onToggleIsShow(false);

  const onChange = (e: TOption): void => {
    e.value && router.push(e.value as string);
    onToggleIsShow(false);
  };

  useOutsideClick(wrapperRef, () => {
    onClose();
  });

  return (
    <div
      className='b1_bold relative flex cursor-pointer items-center gap-2 text-text-static'
      ref={wrapperRef}
      onClick={() => sub_menu && onToggleIsShow((prevState) => !prevState)}
    >
      {t(title)}
      {children && createElement(children)}

      {sub_menu && (
        <Icon name='arrow_bottom' classes='text-2xl text-stroke-tertiary' />
      )}

      {isShow && sub_menu && (
        <Popover className='-right-10 w-[236px]'>
          <CorerSelect
            options={sub_menu?.map((subItem) => ({
              title: t(subItem.title),
              value: subItem.link ?? '',
              children: subItem.children as FunctionComponent,
            }))}
            onChange={onChange}
          />
        </Popover>
      )}
    </div>
  );
};

export default NavItem;
