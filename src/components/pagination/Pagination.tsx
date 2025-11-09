'use client';

import { FC } from 'react';

import { cn } from '@/libs/utils';

import Icon from '@/ui-kit/icon/Icon';

interface TPropsPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<TPropsPagination> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = (): void => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = (): void => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className='mb-6 mt-6 flex flex-row-reverse justify-center'>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className='mx-1 h-[40px] w-[40px] rounded-lg pt-1.5'
      >
        <Icon name='arrow_left' classes='text-5xl text-stroke-static' />
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={cn(
            'mx-1 h-[40px] w-[40px] rounded-lg border border-stroke-primary pt-0.5 text-stroke-secondary',
            currentPage === index + 1
              ? 'b2_bold border-stroke-tertiary bg-text-static text-stroke-tertiary'
              : 'b2_regular',
          )}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={cn('mx-1 h-[40px] w-[40px]', {
          'cursor-not-allowed': currentPage === totalPages,
        })}
      >
        <Icon name='arrow_right' classes='text-5xl text-stroke-static' />
      </button>
    </div>
  );
};

export default Pagination;
