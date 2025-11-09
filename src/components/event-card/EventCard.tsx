'use client';

import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function EventCard({
  title,
  img,
}: {
  title: string;
  img: string;
}) {
  return (
    <div className='before-shadow group relative cursor-pointer overflow-hidden rounded-2xl'>
      <Image
        src={img}
        alt=''
        width={360}
        height={240}
        className='h-[220px] w-full object-cover'
      />

      <div className='t2_bold absolute bottom-0 left-0 right-0 p-3 text-sm text-stroke-static'>
        {title}
      </div>
    </div>
  );
}
