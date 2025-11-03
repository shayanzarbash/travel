'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';

import useDeviceType from '@/hooks/useDeviceType';

import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

import ProfileMenu from '@/app/[locale]/profile/components/profile-menu/ProfileMenu';

const LayoutProfile: FC<{ children: ReactNode }> = ({ children }) => {
  const { isDesktop } = useDeviceType();
  const router = useRouter();

  if (isDesktop) {
    router.replace(`/profile/info`);
  } else {
    router.replace(`/profile/mobile-menu`);
  }

  return (
    <>
      <div className='star_container pb-10'>
        <Breadcrumb />
        <div className='flex'>
          <div className='hidden h-fit w-full lg:block lg:w-1/3'>
            <ProfileMenu />
          </div>
          <div className='relative w-full rounded-2xl bg-background-2 pb-4 pl-5 pr-5 pt-5 sm:mr-3 md:pb-1 md:pt-5 lg:block lg:min-h-0'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutProfile;
