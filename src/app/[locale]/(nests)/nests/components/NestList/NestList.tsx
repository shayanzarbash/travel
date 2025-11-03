'use client';

import { FC } from 'react';

import CardRoom from '@/components/card-room/CardRoom';
import { listRoom } from '@/components/travel-nests/TravelNests';

const NestList: FC = () => (
  <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
    {[...listRoom, listRoom[1]].map((room) => (
      <CardRoom width={422} height={272} {...room} key={room.id} />
    ))}
  </div>
);

export default NestList;
