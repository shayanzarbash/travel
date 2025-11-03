'use client';

import { useEffect, useState } from 'react';

interface TUseDeviceType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const findDevice = (): TUseDeviceType => {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    };
  }
  const mobileQuery = window.matchMedia('(max-width: 767px)');
  const tabletQuery = window.matchMedia(
    '(min-width: 768px) and (max-width: 1023px)',
  );
  const desktopQuery = window.matchMedia('(min-width: 1024px)');

  return {
    isMobile: mobileQuery.matches,
    isTablet: tabletQuery.matches,
    isDesktop: desktopQuery.matches,
  };
};

const useDeviceType = (): TUseDeviceType => {
  const [deviceType, setDeviceType] = useState<TUseDeviceType>(findDevice);

  useEffect(() => {
    // Define the media query ranges based on Tailwind's default breakpoints
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const tabletQuery = window.matchMedia(
      '(min-width: 768px) and (max-width: 1023px)',
    );
    const desktopQuery = window.matchMedia('(min-width: 1024px)');

    const updateDeviceType = (): void => {
      setDeviceType(findDevice);
    };

    // Set initial device type
    updateDeviceType();

    // Add listeners to update device type on change
    mobileQuery.addEventListener('change', updateDeviceType);
    tabletQuery.addEventListener('change', updateDeviceType);
    desktopQuery.addEventListener('change', updateDeviceType);

    // Clean up listeners on unmount
    return (): void => {
      mobileQuery.removeEventListener('change', updateDeviceType);
      tabletQuery.removeEventListener('change', updateDeviceType);
      desktopQuery.removeEventListener('change', updateDeviceType);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
