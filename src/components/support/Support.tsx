import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Support() {
  const features = [
    {
      id: 1,
      title: 'در مسیر ایجاد تحول دیجیتال',
      icon: '/static/images/home/w-1.svg',
    },
    {
      id: 2,
      title: 'تمرکز بر کیفیت، امنیت و نوآوری',
      icon: '/static/images/home/w-2.svg',
    },
    {
      id: 3,
      title: 'پشتیبان موثر در زیرساخت ها',
      icon: '/static/images/home/w-3.svg',
    },
  ];

  return (
    <div className='flex items-end justify-between gap-10'>
      {features.map((item) => (
        <div
          key={item.id}
          className='back-linear-1 border-main max-w-[300px] basis-[300px] rounded-[24px] p-[2px]'
        >
          <div className='flex h-[180px] flex-col items-center justify-center px-[10px]'>
            <Image
              src={item.icon}
              alt={item.title}
              className='object-contain'
              width={80}
              height={80}
            />
            <span className='t1_light pt-[14px] text-stroke-static'>
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
