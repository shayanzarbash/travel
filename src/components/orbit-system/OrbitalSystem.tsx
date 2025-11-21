'use client';
import ScrollIndicator from '@/components/arrow/Arrow';
import Image from 'next/image';
import { useRef, useState } from 'react';

const items = [
  {
    id: '1',
    title: 'تامین و توسعه سامانه های غیربانکی',
    desc:
      'مرکز تأمین و توسعه سامانه‌های غیربانکی ناواکو، مسئول طراحی، تولید و پشتیبانی سامانه‌ها و زیرساخت‌های نرم‌افزاری خارج از حوزه بانکی است.\n' +
      'این مرکز با بهره‌گیری از فناوری‌های روز، به توسعه انواع پورتال‌ها، وب‌سرویس‌ها، سایت‌های سازمانی و سامانه‌های اختصاصی برای نهادها و شرکت‌های مختلف می‌پردازد و نقش مؤثری در گسترش خدمات دیجیتال و تقویت حضور فناورانه ناواکو در حوزه‌های غیربانکی ایفا می‌کند.',
    pos: 'top-[50px] left-[29%]',
    img: '/static/images/home/robot.png',
  },
  {
    id: '2',
    title: 'خدمات مشاوره و مدیریت فناوری های بانکی',
    desc: 'نیبرا، یکی از مراکز تخصصی و دانشی شرکت فناوری اطلاعات ناواکو (تابعه بانک مسکن)، با هدف خلق ارزش و تسریع تحول در بانک مسکن فعالیت می‌کند. این مرکز به‌عنوان بازوی مشاوره مدیریت، نوآوری و توسعه راهکارهای فناورانه، با بهره‌گیری از دانش بین‌رشته‌ای در حوزه مدیریت و فناوری‌های مالی، به بانک مسکن و شرکت‌های تابعه آن کمک می‌کند تا چابک‌تر، هوشمندتر و آینده‌نگرتر عمل کنند. نیبرا با تمرکز بر آینده‌نگری، طراحی مسیر تحول و توسعه توانمندی‌های سازمانی، خدماتی از جمله تدوین راهبرد، بازطراحی مدل کسب‌وکار، توسعه اکوسیستم نوآورانه و ارتقای فرهنگ دیجیتال ارائه می‌دهد تا زمینه‌ساز تحولی پایدار و مبتنی بر ارزش در نظام بانکی باشد.',
    pos: 'top-[40%] right-[100px]',
    img: '/static/images/home/robot.png',
  },
  {
    id: '3',
    title: 'مدیریت عملیات و خدمات پشتیبانی',
    desc: 'مرکز مدیریت عملیات و خدمات پشتیبانی ناواکو به‌عنوان بازوی اجرایی و فنی شرکت، مسئول برنامه‌ریزی، نظارت و اجرای فرآیندهای مرتبط با پشتیبانی، نگهداری و تعمیرات زیرساخت‌های فناوری اطلاعات در سراسر کشور است. این مرکز با بهره‌گیری از شبکه دفاتر استانی و تیم‌های تخصصی، ضمن مدیریت عملیات روزمره سامانه‌ها و تجهیزات، پایداری و تداوم ارائه خدمات فناورانه ناواکو را تضمین می‌کند. هدف این مرکز، ارائه خدمات سریع، ایمن و قابل‌اعتماد به مشتریان و واحدهای تابعه بانک مسکن، و ایجاد زیرساختی کارآمد برای پشتیبانی از تحولات دیجیتال در حوزه بانکی است.',
    pos: 'bottom-[30px] right-[-4%]',
    img: '/static/images/home/robot.png',
  },
  {
    id: '4',
    title: 'تامین و توسعه سامانه بانکداری متمرکز و دیجیتال',
    desc: 'مرکز تأمین و توسعه سامانه بانکداری متمرکز و دیجیتال ناواکو، مسئول طراحی، تأمین، توسعه و پشتیبانی سامانه‌های اصلی بانکداری (Core Banking) و راهکارهای بانکداری دیجیتال بانک مسکن است. این مرکز با بهره‌گیری از فناوری‌های نوین و رویکردی چابک، به‌منظور بهبود کارایی، امنیت و تجربه کاربری در خدمات بانکی فعالیت می‌کند. تمرکز اصلی مرکز بر توسعه زیرساخت‌های نرم‌افزاری یکپارچه، ایجاد قابلیت‌های نوآورانه در حوزه بانکداری دیجیتال و پشتیبانی از تحول دیجیتال در بانک مسکن است تا مسیر حرکت به‌سوی بانکی هوشمند، چابک و مشتری‌محور هموار شود.',
    pos: 'bottom-[13px] left-[30%]',
    img: '/static/images/home/robot.png',
  },
  {
    id: '5',
    title: 'توسعه و پشتیبانی سامانه های بانک مسکن',
    desc: 'مرکز توسعه و پشتیبانی سامانه‌های بانک مسکن ناواکو، مسئول نگهداری، به‌روزرسانی و ارتقای کیفی سامانه‌های موجود بانک مسکن است. این مرکز با رویکردی مبتنی بر بهبود مستمر، به پشتیبانی فنی، توسعه قابلیت‌های جدید و افزایش پایداری و کارایی سامانه‌های بانکی می‌پردازد. هدف اصلی مرکز، تضمین عملکرد بی‌وقفه سیستم‌های حیاتی بانک، ارتقای تجربه کاربران و فراهم‌سازی زیرساخت نرم‌افزاری مطمئن و به‌روز برای پشتیبانی از فعالیت‌های بانک مسکن در مسیر تحول دیجیتال است.',
    pos: 'bottom-[245px] left-[-30px]',
    img: '/static/images/home/robot.png',
  },
  {
    id: '6',
    title: 'آموزش و آکادمی هوش مالی',
    desc: 'آکادمی هوش مالی ناواکو به عنوان یک نهاد آموزشی پیشرو و با هدف تربیت متخصصان توانمند در زمینه های علمی و کاربردی هوش مصنوعی، فناوری اطلاعات، داده کاوی، برنامه نویسی و تولید نرم افزار، تحول دیجیتال و سایر مهارت های مورد نیاز در راستای تحقق اهداف تحول فناوری اطلاعات بانک مسکن تاسیس شده است. ',
    pos: 'top-[30%] left-[59px]',
    img: '/static/images/home/robot.png',
  },
  {
    id: '7',
    title: 'پرداخت الکترونیک',
    desc: 'مرکز خدمات پرداخت الکترونیک ناواکو با مأموریت توسعه و پشتیبانی از راهکارهای نوین پرداخت، مسئول طراحی، پیاده‌سازی و بهبود مستمر خدمات پرداخت الکترونیک در شبکه بانکی به‌ویژه بانک مسکن است. این مرکز با تمرکز بر ارتقای تجربه کاربری، امنیت تراکنش‌ها و بهینه‌سازی فرایندهای مالی، طیفی از خدمات شامل پرداخت‌های کارتی، درگاه‌های اینترنتی، پرداخت موبایلی و سامانه‌های یکپارچه تسویه را ارائه می‌دهد. هدف مرکز، ایجاد زیرساختی پایدار، امن و نوآورانه برای تسهیل خدمات مالی و گسترش بانکداری دیجیتال در کشور است.',
    pos: 'bottom-[23%] left-[56%]',
    img: '/static/images/home/robot.png',
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function OrbitalSystem() {
  const [active, setActive] = useState('1');
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (id: string): void => {
    setActive(id);
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 500);
  };

  return (
    <div className='before-bg w-full'>
      {/* orbit items */}
      <div className='relative mx-auto h-[650px] w-full'>
        {items.map((i) => (
          <div
            key={i.id}
            onClick={() => handleClick(i.id)}
            className={`t2_regular absolute w-[199px] cursor-pointer text-stroke-static ${i.pos}`}
          >
            {i.title}
          </div>
        ))}
      </div>
      <Image
        src='/static/images/home/navaco-1.svg'
        width={219}
        height={219}
        alt=''
        className='absolute top-[14%] left-1/2 -translate-x-1/2'
      />
      <ScrollIndicator />

      <div
        ref={bottomRef}
        className={`overflow-hidden transition-all duration-500 ${
          active ? 'max-h-[650px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='text-white back-linear-3 border-main mt-10 flex justify-between rounded-[24px] p-8 pb-16 pl-24 pr-8 pt-12'>
          <div>
            <div className='mb-8 flex items-center'>
              <div className='flex items-center gap-2'>
                <div className=''>
                  <Image
                    src='/static/images/home/academy.svg'
                    alt='logo'
                    width={56}
                    height={32}
                    className='object-contain'
                  />
                </div>
                <span className='t1_bold pr-4 text-stroke-static'>
                  {items.find((i) => i.id === active)?.title}
                </span>
              </div>
            </div>
            <div className='flex flex-col items-start gap-12 md:flex-row'>
              <div className='max-w-3xl text-lg leading-relaxed'>
                <p className='t2_light text-justify text-stroke-static'>
                  {items.find((i) => i.id === active)?.desc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
