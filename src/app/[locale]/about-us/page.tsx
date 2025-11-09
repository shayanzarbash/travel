import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Image from 'next/image';

const items = [
  {
    id: 1,
    title: 'مرکز توسعه و پشتیبانی سامانه‌های بانک مسکن',
    description:
      ' این مرکز مسئول طراحی، توسعه و پشتیبانی سامانه‌های اختصاصی بانک مسکن است و با تمرکز بر به‌روزرسانی و نگهداری زیرساخت‌های نرم‌افزاری، نقش محوری در تداوم خدمات بانکی ایفا می‌کند.',
  },
  {
    id: 2,
    title: 'مرکز تأمین و توسعه سامانه بانکداری متمرکز و دیجیتال',
    description:
      'وظیفه این مرکز توسعه، بهینه‌سازی و پشتیبانی از سامانه‌های بانکداری متمرکز (Core Banking) و راهکارهای بانکداری دیجیتال است تا فرآیندهای مالی و خدمات بانکی با سرعت، امنیت و دقت بالاتر انجام شوند.',
  },
  {
    id: 3,
    title: 'مرکز تأمین و توسعه سامانه‌های غیربانکی',
    description:
      'این مرکز بر طراحی و توسعه سامانه‌ها و پلتفرم‌های غیر بانکی با رویکرد اکوسیستمی تمرکز دارد و خدمات فناورانه را در حوزه‌های مسکن، حمل‌ونقل، بازارگاه‌ها و سایر صنایع مرتبط ارائه می‌دهد.',
  },
  {
    id: 4,
    title: 'مرکز خدمات پرداخت الکترونیک',
    description:
      'این مرکز مسئول ارائه و پشتیبانی از خدمات جامع پرداخت الکترونیک شامل پایانه‌های فروش، درگاه‌های پرداخت اینترنتی، سامانه‌های پذیرندگی و تسویه مالی است و یکی از ارکان کلیدی حوزه پرداخت ناواکو محسوب می‌شود.',
  },
  {
    id: 5,
    title: 'مرکز مدیریت عملیات و خدمات پشتیبانی',
    description:
      'مدیریت و نظارت بر عملکرد فنی و عملیاتی سامانه‌ها، زیرساخت‌ها و مراکز داده، و همچنین پشتیبانی مستمر از شعب و مشتریان بانک مسکن از مأموریت‌های اصلی این مرکز به‌شمار می‌رود.',
  },
  {
    id: 6,
    title: 'مرکز خدمات مشاوره و مدیریت فناوری‌های بانکی',
    description:
      'این مرکز در زمینه سیاست‌گذاری، مشاوره راهبردی و مدیریت پروژه‌های تحول دیجیتال و فناوری اطلاعات بانک مسکن فعالیت دارد و نقش مهمی در هم‌راستا‌سازی فناوری با اهداف کلان بانکی ایفا می‌کند.',
  },
  {
    id: 7,
    title: 'مرکز آموزش هوش مالی',
    description:
      'آکادمی هوش مالی ناواکو به‌عنوان بازوی آموزشی شرکت، مأموریت ارتقای دانش تخصصی در حوزه‌های مالی، بانکی، فناوری و هوش مصنوعی را بر عهده دارد و با برگزاری دوره‌ها و کارگاه‌های تخصصی به توسعه سرمایه انسانی کمک می‌کند.',
  },
];

const AboutImages = [
  {
    id: 1,
    title: '7 مرکز تخصصی تحت پوشش',
    image: '/static/images/home/ab-1.svg',
  },
  {
    id: 2,
    title: '20 سال سابقه فعالیت',
    image: '/static/images/home/ab-2.svg',
  },
  {
    id: 3,
    title: '600 نفر سرمایه انسانی متخصص',
    image: '/static/images/home/ab-3.svg',
  },
  {
    id: 4,
    title: 'بیش از 30 دفتر استانی',
    image: '/static/images/home/ab-4.svg',
  },
];

const mission = [
  {
    id: 1,
    title: 'پیشران و محرک جریان توسعه نواوری و فناوری هوشمند و تحول دیجیتال',
  },
  {
    id: 2,
    title: 'تسهیل گر فرآیند حکمرانی جریان مالی و اطلاعات بخش راه و مسکن',
  },
  {
    id: 3,
    title: 'نهاد مرجع و معتمد توسعه فناوری و اطلاعات در زیست بوم راه و مسکن',
  },
  {
    id: 4,
    title:
      'توسعه دهنده محصولات، خدمات و کسب و کارهای ارزش زا و اقتصاد مبتنی بر فناوری و اطلاعات در زیست بومراه و مسکن ',
  },
];

export default function AboutUsPage() {
  return (
    <>
      <div className='pb-24'>
        <div className='star_container lg:pb-[120px]'>
          <Breadcrumb />
          <div className='text-white back-linear-3 mt-2 flex flex-col justify-between rounded-[24px] p-8 pb-16 pl-8 pr-8 pt-12'>
            <div>
              <h2 className='h2_black border-static mb-11 border-b pb-8 text-stroke-static'>
                درباره‌ی ما
              </h2>
            </div>
            <div>
              <p className='t2_light text-stroke-static'>
                شرکت فناوری و اطلاعات ناواکو، بازوی تخصصی فناوری و نوآوری بانک
                مسکن، با بیش از دو دهه تجربه در ارائه‌ی راهکارهای جامع بانکی و
                مالی، به‌عنوان یکی از شرکت‌های پیشرو در صنعت فناوری اطلاعات کشور
                شناخته می‌شود. این شرکت با تکیه بر دانش و تخصص بیش از ششصد نیروی
                انسانی مجرب و شبکه‌ای گسترده از دفاتر استانی، مأموریت خود را بر
                توسعه و هوشمندسازی خدمات بانکی، پرداخت و تحول دیجیتال در نظام
                مالی کشور متمرکز کرده است.
              </p>
              <p className='t2_light text-stroke-static pt-12'>
                ناواکو با سابقه‌ای ثبت‌شده از دهه‌ی ۱۳۵۰ و آغاز فعالیت تخصصی در
                حوزه‌ی فناوری اطلاعات از سال ۱۳۸۷، امروز به‌عنوان شرکت مادر
                تخصصی فناوری و اطلاعات بانک مسکن، نقش کلیدی در طراحی، توسعه و
                پشتیبانی سامانه‌های نوین بانکی و پرداخت الکترونیک ایفا می‌کند.
                مأموریت ناواکو، خلق ارزش از طریق نوآوری فناورانه، ارتقای
                بهره‌وری شبکه‌ی بانکی و ارائه‌ی خدمات هوشمند به بانک‌ها، مشتریان
                و کسب‌وکارهاست.
              </p>
              <p className='t1_light text-stroke-static pt-12 '>
                ناواکو شامل هفت مرکز تخصصی تحت پوشش است که هر یک مأموریت مشخص و
                نقش کلیدی در زنجیره خدمات فناوری بانک مسکن ایفا می‌کنند:
              </p>
            </div>
            <div className='pt-6'>
              {items.map((item) => (
                <div key={item.id} className='flex flex-col pb-6'>
                  <div className='flex items-center'>
                    <Image
                      src='/static/images/home/tick-circle.svg'
                      alt='logo'
                      width={32}
                      height={32}
                      className='object-contain'
                    />
                    <h3 className='t1_light pr-5 text-stroke-static'>
                      {item.title}
                    </h3>
                  </div>
                  <p className='t1_light text-stroke-static'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='back-linear-7'>
          <div className='star_container'>
            <div className='flex justify-between gap-5'>
              {AboutImages.map((item) => (
                <div key={item.id} className='flex pb-16 pt-20'>
                  <div className='flex max-w-[250px] flex-col items-center gap-5 text-center'>
                    <Image
                      src={item.image}
                      alt='logo'
                      width={64}
                      height={64}
                      className='object-contain'
                    />
                    <h3 className='t2_light pr-5 text-stroke-static'>
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='star_container'>
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
          </div>
          <h2 className='h2_black pb-20 pt-52 text-center text-stroke-static'>
            ماموریت‌های راهبردی ناواکو
          </h2>
          <p className='t2_light pb-8 text-stroke-static'>
            مأموریت ما، هم‌افزایی در استفاده از فناوری‌های نوین در شرکت‌های
            تابعه بانک مسکن، مشارکت با فعالان و بازیگران ارزش‌آفرین و نوآور برای
            ارتقاء بهره‌وری، پایداری و امنیت در توسعه زیست‌بوم‌های خدمات فناوری
            مالی زنجیره مسکن و شهرسازی است. سرآمدی ما در خلق ارزش برای مشتریان
            بانک مسکن‌، توانمندی ذی‌اثران را تضمین می‌کند.
          </p>
          {mission.map((item) => (
            <div key={item.id} className='flex max-w-3xl pb-4 pt-2'>
              <div className='flex items-center text-center'>
                <Image
                  src='/static/images/home/tick-circle.svg'
                  alt='logo'
                  width={32}
                  height={32}
                  className='object-contain'
                />
                <h3 className='t1_light pr-5 text-right text-stroke-static'>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
