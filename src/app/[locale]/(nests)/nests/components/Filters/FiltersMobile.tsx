'use client';

import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import Filters from '@/app/[locale]/(nests)/nests/components/Filters/Filters';
import BottomSheet from '@/ui-kit/bottom-sheet/BottomSheet';
import Button from '@/ui-kit/button/Button';
import Icon from '@/ui-kit/icon/Icon';

const FiltersMobile: FC = () => {
  const t = useTranslations('Nests');
  const [isShowFilter, onToggleIsShowFilter] = useState(false);

  const handleChangeIsShowFilter = (): void =>
    onToggleIsShowFilter((prevState) => !prevState);

  return (
    <>
      {isShowFilter && (
        <BottomSheet label={t('filter')} onClose={handleChangeIsShowFilter}>
          <Filters />
        </BottomSheet>
      )}
      <div className='sticky bottom-6 z-10 mx-auto flex justify-center md:bottom-10 lg:hidden'>
        <Button
          onClick={handleChangeIsShowFilter}
          className='flex !w-auto gap-2'
        >
          <Icon name='filter' />
          {t('filter')}
        </Button>
      </div>
    </>
  );
};

export default FiltersMobile;
