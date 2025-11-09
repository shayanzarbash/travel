// components/RightSideTabs.jsx
import ScrollRight from '@/components/arrow-right/Arrow';
import Image from 'next/image';
import { useState } from 'react';

const tabs = [
  {
    id: 1,
    title: 'پرداخت الکترونیک',
    values: [
      {
        value: ' مدیریت تامین و توسعه پایانه های فروشگاهی و سامانه های پرداخت',
      },
      { value: 'مدیریت سوئیچ و زیرساخت های نرم افزاری' },
      { value: 'توسعه کسب و کار و خدمات بانکداری الکترونیک' },
    ],
  },
  {
    id: 2,
    title: 'پشتیبانی شعب و مدیریت امور مشتریان',
    values: [
      { value: 'نگهداری  تعمیرات زیرساخت و ناوگان پرداخت الکترونیک' },
      { value: 'مدیریت ارتباطات مشتریان و مرکز تماس' },
    ],
  },
  {
    id: 3,
    title: 'توسعه کسب و کارهای نوآورانه و فناورانه در زیست بوم راه و مسکن',
    values: [
      {
        value: 'توسعه محصولات و خدمات نواورانه و فناورانه زیست بوم راه و مسکن',
      },
      { value: 'خدمات هوشمند حمل و نقل' },
      { value: 'سامانه عوارض آزادراهی و صدور معاینه فنی' },
      { value: 'توسعه بازارگاه و تامین مالی و زنجیره ای' },
    ],
  },
  {
    id: 4,
    title: 'مدیریت فناوری اطلاعات، طراحی و معماری سیتم، داده و فرآیند',
    values: [
      { value: 'طراحی و استقرار نظام های مدیریت خدمات فناوری اطلاعات' },
      { value: 'برنامه ریزی راهبردی عملیات فناوری اطلاعات و تحول دیجیتال' },
      {
        value: 'مدیریت و راهبری طرح‌ها و پروژه‌های ملی و تخصصی فناوری اطلاعات',
      },
      { value: 'معماری و مدیریت سیستم، داده و فرآیند' },
    ],
  },
  {
    id: 5,
    title: 'خدمات آموزشی و مشاوره فناوری های بانکی',
    values: [
      { value: 'مشاوره و مدیریت فناوری های بانکی' },
      { value: 'مشاوره توسعه کسب و کار، محصولات و خدمات جدید' },
      {
        value: 'توانمندسازی علمی و عملی سرمایه‌های انسانی حوزه فناوری اطلاعات',
      },
    ],
  },
  {
    id: 6,
    title: 'بانکداری دیجیتال و هوشمندسازی',
    values: [
      { value: 'توسعه کسب و کارهای پلتفرمی و بانکداری دیجیتال' },
      { value: 'توسعه سامانه های مدرن بانکی' },
      { value: 'توسعه سامانه های داده محور و هوشمند بانکی' },
    ],
  },
  {
    id: 7,
    title: 'زیرساخت، امنیت و مرکز داده',
    values: [
      { value: 'مدیریت طراحی، تامین و توسعه و نگهداری زیرساخت و مراکز داده' },
      { value: 'ایجاد و توسعه شبکه های ارتباطی' },
      { value: 'مدیریت امنیت' },
    ],
  },
  {
    id: 8,
    title: 'مدیریت سامانه های متمرکز و غیرمتمرکز بانکی و غیربانکی',
    values: [
      { value: 'مدیریت تامین، توسعه و پشتیبانی سامانه‌های متمرکز بانکی' },
      { value: 'مدیریت تامین، توسعه و پشتیبانی سامانه‌های غیر متمرکز' },
      { value: 'مدیریت تامین، توسعه و پشتیبانی سامانه‌های غیر بانکداری' },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RightSideTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className='mt-32'>
      <h2 className='h2_black pb-[100px] text-center text-stroke-static'>
        حوزه‌های تخصصی خدمات
      </h2>
      <div className='flex h-[700px] w-full overflow-hidden rounded-[20px]'>
        <div className='back-linear-1 border-main ml-10 flex w-1/3 flex-col rounded-[24px] pt-5'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`hover:bg-gray-50 b1_bold p-4 text-right text-stroke-static transition ${
                activeTab.id === tab.id ? 'b1_bold bg-green' : ''
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <ScrollRight />

        <div className='back-linear-1 mr-10 flex flex-1 gap-[20px] rounded-[24px] border-none p-6'>
          <div className='flex items-center justify-center'>
            <Image
              src='/static/images/home/planet-2.png'
              alt='logo'
              width={211}
              height={211}
              className=''
            />
          </div>
          <div className='flex flex-col justify-center'>
            {activeTab.values.map((item, index) => (
              <div
                key={index}
                className='bg-white mb-6 flex items-center gap-[10px] rounded p-2 shadow-sm'
              >
                <Image
                  src='/static/images/home/tick-circle.svg'
                  alt='logo'
                  width={32}
                  height={32}
                  className='object-contain'
                />
                <span className='t2_regular text-stroke-static'>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side tabs */}
      </div>
    </div>
  );
}
