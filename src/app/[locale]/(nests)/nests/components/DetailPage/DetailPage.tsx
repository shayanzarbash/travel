'use client';

import { FC, useEffect, useState } from 'react';

import useDeviceType from '@/hooks/useDeviceType';

import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

import DetailMain from '@/app/[locale]/(nests)/nests/components/DetailMain/DetailMain';
import Images from '@/app/[locale]/(nests)/nests/components/Images/Images';
import OtherNestCity from '@/app/[locale]/(nests)/nests/components/OtherNestCity/OtherNestCity';
import SideBar from '@/app/[locale]/(nests)/nests/components/SideBar/SideBar';

const DetailPage: FC = () => {
  const [isShowRequest, onToggleIsShowRequest] = useState(true);

  const { isDesktop } = useDeviceType();

  useEffect(() => {
    isDesktop && onToggleIsShowRequest(false);
  }, [isDesktop]);

  return !isShowRequest ? (
    <>
      <Breadcrumb />
      <Images />
      <div className='flex flex-col items-start gap-3 lg:flex-row lg:gap-5 lg:pb-10 lg:pt-5'>
        <DetailMain />
        <SideBar
          isShowRequest={isShowRequest}
          onToggleIsShowRequest={onToggleIsShowRequest}
        />
      </div>
      <OtherNestCity />
    </>
  ) : (
    <SideBar
      isShowRequest={isShowRequest}
      onToggleIsShowRequest={onToggleIsShowRequest}
    />
  );
};

export default DetailPage;
