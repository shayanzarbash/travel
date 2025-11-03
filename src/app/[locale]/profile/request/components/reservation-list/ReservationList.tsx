'use client';

import { useState } from 'react';

import { paginate } from '@/libs/utils';

import Pagination from '@/components/pagination/Pagination';

import RequestCard from '@/app/[locale]/profile/request/components/request-card/RequestCard';

export interface TListReserve {
  id: number;
  title: string;
  location: string;
  count_person: string;
  add_count_person: string;
  Departure_date: string;
  return_date: string;
  status: string;
  status_title: string;
  link: string;
  image: string;
}

export const listReserve: TListReserve[] = [
  {
    id: 1,
    title: 'سوییت شماره 1',
    location: 'مشهد',
    count_person: 'نفر 5',
    add_count_person: '2 نفر اضافه',
    Departure_date: '27 تیر',
    return_date: '30 تیر',
    status: 'waiting_confirmation',
    status_title: 'در انتظار تایید',
    link: '/request-detail',
    image: '/static/images/home/image-sample.jpeg',
  },
  {
    id: 2,
    title: 'سوییت شماره 2',
    location: 'مشهد',
    count_person: 'نفر 5',
    add_count_person: '2 نفر اضافه',
    Departure_date: '27 تیر',
    return_date: '30 تیر',
    status: 'awaiting_payment',
    status_title: 'در انتظار پرداخت',
    link: '/request-detail',
    image: '/static/images/home/image-sample.jpeg',
  },
  {
    id: 3,
    title: 'سوییت شماره 3',
    location: 'مشهد',
    count_person: 'نفر 5',
    add_count_person: '2 نفر اضافه',
    Departure_date: '27 تیر',
    return_date: '30 تیر',
    status: 'paid',
    status_title: 'پرداخت شد',
    link: '/request-detail',
    image: '/static/images/home/image-sample.jpeg',
  },
  {
    id: 4,
    title: 'سوییت شماره 4',
    location: 'مشهد',
    count_person: 'نفر 5',
    add_count_person: '2 نفر اضافه',
    Departure_date: '27 تیر',
    return_date: '30 تیر',
    status: 'expired',
    status_title: 'منقضی شده',
    link: '/request-detail',
    image: '/static/images/home/image-sample.jpeg',
  },
  {
    id: 5,
    title: 'سوییت شماره 5',
    location: 'مشهد',
    count_person: 'نفر 5',
    add_count_person: '2 نفر اضافه',
    Departure_date: '27 تیر',
    return_date: '30 تیر',
    status: 'finished',
    status_title: 'اتمام یافته',
    link: '###',
    image: '/static/images/home/image-sample.jpeg',
  },
  {
    id: 6,
    title: 'سوییت شماره 6',
    location: 'مشهد',
    count_person: 'نفر 5',
    add_count_person: '2 نفر اضافه',
    Departure_date: '27 تیر',
    return_date: '30 تیر',
    status: 'expired',
    status_title: 'منقضی شده',
    link: '###',
    image: '/static/images/home/image-sample.jpeg',
  },
  {
    id: 7,
    title: 'سوییت شماره 7',
    location: 'مشهد',
    count_person: 'نفر 5',
    add_count_person: '2 نفر اضافه',
    Departure_date: '27 تیر',
    return_date: '30 تیر',
    status: 'paid',
    status_title: 'پرداخت شد',
    link: '###',
    image: '/static/images/home/image-sample.jpeg',
  },
  {
    id: 8,
    title: 'سوییت شماره 8',
    location: 'مشهد',
    count_person: 'نفر 5',
    add_count_person: '2 نفر اضافه',
    Departure_date: '27 تیر',
    return_date: '30 تیر',
    status: 'paid',
    status_title: 'پرداخت شد',
    link: '###',
    image: '/static/images/home/image-sample.jpeg',
  },
  {
    id: 9,
    title: 'سوییت شماره 9',
    location: 'مشهد',
    count_person: 'نفر 5',
    add_count_person: '2 نفر اضافه',
    Departure_date: '27 تیر',
    return_date: '30 تیر',
    status: 'paid',
    status_title: 'پرداخت شد',
    link: '###',
    image: '/static/images/home/image-sample.jpeg',
  },
  {
    id: 10,
    title: 'سوییت شماره 10',
    location: 'مشهد',
    count_person: 'نفر 5',
    add_count_person: '2 نفر اضافه',
    Departure_date: '27 تیر',
    return_date: '30 تیر',
    status: 'paid',
    status_title: 'پرداخت شد',
    link: '###',
    image: '/static/images/home/image-sample.jpeg',
  },
];

const itemsPerPage = 4;

export default function ReservationList(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedItems = paginate<TListReserve>(
    listReserve,
    currentPage,
    itemsPerPage,
  );
  const totalPages = Math.ceil(listReserve.length / itemsPerPage);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <>
      {paginatedItems.map((reserve) => (
        <RequestCard {...reserve} key={reserve.id} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
