'use client';
import { useState } from 'react';
import Image from 'next/image';

const items = [
  {
    id: 'academy',
    title: 'آموزش و آکادمی هوش مالی',
    desc: '...',
    pos: 'top-[120px] left-[30px]',
  },
  {
    id: 'consult',
    title: 'خدمات مشاوره و مدیریت فناوری',
    desc: '...',
    pos: 'top-[80px] right-[60px]',
  },
  {
    id: 'payment',
    title: 'پرداخت الکترونیک',
    desc: '...',
    pos: 'bottom-[150px] right-[120px]',
  },
  {
    id: 'housing',
    title: 'سامانه بانک مسکن',
    desc: '...',
    pos: 'bottom-[180px] left-[90px]',
  },
];

export default function OrbitalSystem() {
  return (
    <>
      <div className='relative'>
        <div className='absolute right-[-60px] top-[45px]'>
          <Image
            src='/static/images/home/planet.svg'
            width={144}
            height={144}
            alt=''
            className='float-y'
          />
        </div>
        <h2 className='pb-16 text-center text-[44px] font-bold text-stroke-static'>
          مراکز تخصصی ناواکو
        </h2>
        <Image
          src='/static/images/home/frame-1.png'
          width={1440}
          height={651}
          alt=''
          className=''
        />
      </div>
    </>
  );
}

// export default function OrbitalSystem(){
//   const [active, setActive] = useState(null)
//
//   return (
//     <div className='w-full'>
//       {/* orbit items */}
//       <div className='relative mx-auto h-[500px] w-full'>
//         {items.map((i) => (
//           <div
//             key={i.id}
//             onClick={() => setActive(i.id)}
//             className={`absolute cursor-pointer ${i.pos}`}
//           >
//             {i.title}
//           </div>
//         ))}
//       </div>
//
//       {/* bottom box */}
//       <div
//         className={`overflow-hidden transition-all duration-500 ${active ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'} `}
//       >
//         <div className='bg-white/10 border-white/20 mt-6 rounded-3xl border p-6 backdrop-blur-lg'>
//           <h3 className='mb-4 text-xl font-bold'>
//             {items.find((i) => i.id === active)?.title}
//           </h3>
//           <p className='text-sm leading-7'>
//             {items.find((i) => i.id === active)?.desc}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
