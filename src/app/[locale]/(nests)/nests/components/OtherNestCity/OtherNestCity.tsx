'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';

import useDeviceType from '@/hooks/useDeviceType';

import TravelNests from '@/components/travel-nests/TravelNests';

const OtherNestCity: FC = () => {
  const t = useTranslations('HomePage');

  const { isDesktop } = useDeviceType();
  return isDesktop && <TravelNests label={t('main.mashhad_2')} />;
};

export default OtherNestCity;
