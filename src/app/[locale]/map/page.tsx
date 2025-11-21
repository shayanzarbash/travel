"use client";

import { useState } from "react";
import Image from 'next/image';

// branches.ts
// data/branches.ts

export const branches = {
  tehran: {
    title: "شعبه‌های تهران",
    list: [
      {
        id: "central",
        name: "شعبه مرکزی",
        address: "تهران، سعادت‌آباد، میدان کاج، سرو شرقی ...",
        phone: "02144556677",
        postal: "1234567890",
      },
      {
        id: "east",
        name: "شعبه شرق",
        address: "تهرانپارس، فلکه اول ...",
        phone: "02177889900",
        postal: "1122334455",
      },
      {
        id: "west",
        name: "شعبه غرب",
        address: "شهرزیبا، سازمان آب ...",
        phone: "02144001122",
        postal: "9988776655",
      },
    ],
  },

  mashhad: {
    title: "شعبه‌های مشهد",
    list: [
      {
        id: "central",
        name: "شعبه مرکزی مشهد",
        address: "مشهد، احمدآباد، چهارراه لشکر",
        phone: "05133445566",
        postal: "4477889900",
      },
      {
        id: "south",
        name: "شعبه جنوب مشهد",
        address: "بلوار سجاد ...",
        phone: "05133775522",
        postal: "5566778899",
      },
    ],
  },

  shiraz: {
    title: "شعبه‌های شیراز",
    list: [
      {
        id: "central",
        name: "شعبه مرکزی شیراز",
        address: "شیراز، قصرالدشت ...",
        phone: "07132323232",
        postal: "112298778",
      },
    ],
  },
};



export default function MapBranches() {
  const [activeBranch, setActiveBranch] = useState<keyof typeof branches>("tehran");

  const data = branches[activeBranch];
  return (
    <div className='star_container'>
      <div className='flex items-start gap-8'>
        {/* —————————— نقشه —————————— */}

        <div className='bg-white flex-1 space-y-6 rounded-2xl p-6 shadow'>
          <h3 className='text-xl font-bold'>{data.title}</h3>

          <div className='space-y-4'>
            {data.list.map((branch) => (
              <div key={branch.id} className='border-b pb-4'>
                <p className='font-semibold'>{branch.name}</p>
                <p className='text-gray-600 text-sm'>{branch.address}</p>

                <div className='text-gray-700 mt-2 text-sm'>
                  <p>تلفن: {branch.phone}</p>
                  <p>کدپستی: {branch.postal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='relative max-w-[50%] basis-2/4'>
          <Image
            src='/static/images/home/map2.svg'
            className='w-full'
            alt='map'
            width={608}
            height={550}
          />

          {/* نقاط روی نقشه — به دلخواه با absolute جای‌گذاری کن */}
          <button
            className='absolute left-[171px] top-[101px] h-[75px] w-[90px] cursor-pointer'
            onClick={() => setActiveBranch("tehran")}
          />

          <button
            className='absolute right-[94px] top-[94px] h-[113px] w-[120px] cursor-pointer'
            onClick={() => setActiveBranch("mashhad")}
          />

          <button
            className='absolute bottom-[130px] right-[141px] h-[100px] w-[113px] cursor-pointer'
            onClick={() => setActiveBranch("shiraz")}
          />

          <button
            className='absolute left-[98px] top-[243px] h-[120px] w-[75px] cursor-pointer'
            onClick={() => setActiveBranch("shiraz")}
          />
        </div>

        {/* —————————— کادر اطلاعات —————————— */}
      </div>
    </div>
  );
}
