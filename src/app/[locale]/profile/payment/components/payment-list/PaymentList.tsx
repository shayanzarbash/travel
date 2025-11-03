'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { paginate } from '@/libs/utils';

import Pagination from '@/components/pagination/Pagination';

import EmptyStatus from '@/app/[locale]/profile/components/empty-status/EmptyStatus';
import PaymentCard from '@/app/[locale]/profile/payment/components/payment-card/PaymentCard';

const items = [
  {
    id: 1,
    price: 20000000,
    name: 'رزرو اقامتگاه مشهد سوییت شماره 1',
    time: '۱۴:۲۰',
    date: '۱۴۰۰/۰۸/۲۱',
    status: 'success',
    status_title: 'موفق',
  },
  {
    id: 2,
    price: 50000000,
    name: 'رزرو اقامتگاه کیش سوییت شماره 2',
    time: '۱۴:۲۰',
    date: '۱۴۰۰/۰۸/۲۱',
    status: 'failed',
    status_title: 'ناموفق',
  },
  {
    id: 3,
    price: 75000000,
    name: 'رزرو اقامتگاه مشهد سوییت شماره 3',
    time: '۱۴:۲۰',
    date: '۱۴۰۰/۰۸/۲۱',
    status: 'success',
    status_title: 'موفق',
  },
  {
    id: 4,
    price: 16200000,
    name: 'رزرو اقامتگاه مشهد سوییت شماره 4',
    time: '۱۴:۲۰',
    date: '۱۴۰۰/۰۸/۲۱',
    status: 'failed',
    status_title: 'ناموفق',
  },
  {
    id: 5,
    price: 5200000,
    name: 'رزرو اقامتگاه رامسر سوییت شماره 5',
    time: '۱۴:۲۰',
    date: '۱۴۰۰/۰۸/۲۱',
    status: 'success',
    status_title: 'موفق',
  },
  {
    id: 6,
    price: 78000000,
    name: 'رزرو اقامتگاه کیش سوییت شماره 6',
    time: '۱۴:۲۰',
    date: '۱۴۰۰/۰۸/۲۱',
    status: 'failed',
    status_title: 'ناموفق',
  },
  {
    id: 7,
    price: 78000000,
    name: 'رزرو اقامتگاه کیش سوییت شماره 7',
    time: '۱۴:۲۰',
    date: '۱۴۰۰/۰۸/۲۱',
    status: 'failed',
    status_title: 'ناموفق',
  },
];

const itemsPerPage = 5;

export default function PaymentList(): JSX.Element {
  const t = useTranslations('Profile');

  const [currentPage, setCurrentPage] = useState(1);
  const paginatedItems = paginate(items, currentPage, itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <>
      {items.length ? (
        <>
          {paginatedItems.map((item) => (
            <PaymentCard {...item} key={item.id} />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <EmptyStatus
          src='/static/images/profile/transactions-not-found.svg'
          title={t('no_request_payment')}
        />
      )}
    </>
  );
}
