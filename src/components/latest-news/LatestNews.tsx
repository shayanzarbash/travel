'use client';

import { useState } from 'react';

import NewsCard from '@/components/news-card/NewsCard';
import { newsData, NewsItem } from '@/components/news-slider/NewsSlider';
import Pagination from '@/components/pagination/Pagination';

const ITEMS_PER_PAGE = 6;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function LatestNews() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  // آیتم‌هایی که باید در صفحه فعلی نمایش داده شوند
  const currentItems = newsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <>
      <div className='flex flex-wrap justify-center gap-12'>
        {currentItems.map((item: NewsItem) => (
          <>
            <NewsCard data={item} width="390px" />
          </>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
