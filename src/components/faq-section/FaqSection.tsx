import AccordionItem from '@/ui-kit/accordion/Accordion';
import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function AccordionSection() {
  const data = [
    {
      title:
        'مشاوره و اجرای طرح‌های امنیتی شبکه، زیرساخت و دیتاسنتر چگونه اجرا می‌شود؟',
      content: 'لورم ایپسوم توضیحات...',
    },
    {
      title:
        'مشاوره و اجرای طرح‌های امنیتی شبکه، زیرساخت و دیتاسنتر چگونه اجرا می‌شود؟',
      content: 'لورم ایپسوم توضیحات...',
    },
    {
      title:
        'مشاوره و اجرای طرح‌های امنیتی شبکه، زیرساخت و دیتاسنتر چگونه اجرا می‌شود؟',
      content: 'لورم ایپسوم توضیحات...',
    },
  ];

  return (
    <>
      <div className='relative'>
        <div className='absolute right-[-16px] top-[100px]'>
          <Image
            src='/static/images/home/planet.svg'
            width={144}
            height={144}
            alt=''
            className='float-y'
          />
        </div>
        <h2 className='h2_black pb-9 pt-40 text-center text-stroke-static'>
          سوالات متداول
        </h2>
        <div className='back-linear-5 mx-auto w-full rounded-[24px] px-16 py-6 backdrop-blur'>
          {data.map((item, i) => (
            <AccordionItem key={i} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
