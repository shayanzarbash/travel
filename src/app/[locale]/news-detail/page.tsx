import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Icon from '@/ui-kit/icon/Icon';
import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function NewsDetails() {
  return (
    <div className='star_container lg:pb-[120px]'>
      <Breadcrumb />

      <div className='back-linear-1 flex rounded-3xl p-6'>
        <div className='max-w-2/3 basis-4xl max-w-4xl pl-4'>
          <div>
            <div className='flex justify-between'>
              <h2 className='t1_bold max-w-[750px] pb-5 text-stroke-static'>
                رونمایی از برنامه‌های جدید برای توانمندسازی شرکت‌های تابعه گروه
                مالی بانک مسکن
              </h2>
              <div className='flex'>
                <Icon name='calendar' classes='text-xl text-stroke-static' />
                <span className='c1_regular text-stroke-static'>
                  12 آبان 1404
                </span>
              </div>
            </div>
            <div className='flex justify-end pb-8'>
              <Image
                src='/static/images/home/news.jpg'
                alt=''
                width={560}
                height={315}
                className='rounded-[12px] object-cover'
              />
            </div>

            <p className='t2_regular text-justify text-stroke-static'>
              به گزارش روابط عمومی گروه مالی بانک مسکن در جلسه‌ای با حضورعلی
              خورسندیان، مدیرعامل بانک مسکن، صابر عسگرپور عضو هیئت مدیره بانک
              مسکن با مدیرعامل، مدیران گروه مالی و همچنین مدیران عامل شرکت‌های
              تابعه، برگزار شد، دکتر علی عسکری، مدیرعامل گروه مالی بانک مسکن با
              اشاره به ظرفیت‌ها و توانمندی‌های زیر مجموعه های گروه مالی بانک
              مسکن تأکید کرد: همه شرکت‌های تابعه باید با هدف‌گذاری دقیق و
              برنامه‌ریزی منسجم، مسیر تحقق مأموریت‌های خود را دنبال کنند.
              مدیرعامل گروه مالی بانک مسکن در ادامه به برخی موانع و چالش‌های
              موجود در مسیر توسعه فعالیت شرکت‌های تابعه اشاره کرد و برای تسریع
              روند پیشرفت پروژه‌ها، کاهش هزینه‌ها و افزایش بهره‌وری، راهکارها و
              پیشنهاداتی ارائه داد. به گفته وی، توانمندسازی و ارتقاء سطح عملکرد
              شرکت‌های وابسته از اولویت‌های مهم گروه مالی بانک مسکن است. همچنین
              در این نشست، مدیران عامل شرکت‌های زیرمجموعه گروه مالی بانک مسکن
              گزارشی از وضعیت عملکردی شرکت‌های خود ارائه کردند. این گزارش‌ها
              شامل بررسی صورت‌های مالی، وضعیت سود و زیان، اقدامات مربوط به
              افزایش سرمایه، وصول مطالبات، بازدهی، وضعیت معاملات، اجرای
              برنامه‌های عملیاتی مصوب، مشکلات و موانع موجود و نیز راهکارهای
              پیشنهادی برای بهبود شرایط بود.
            </p>
          </div>
        </div>
        <div className='basis-3xl max-w-3xl pr-4'>
          <h2 className='t1_bold pb-5 text-stroke-static'>اخبار مرتبط</h2>
          <div className='flex items-center rounded-2xl bg-text-static'>
            <Image
              src='/static/images/home/news.jpg'
              alt=''
              width={120}
              height={120}
              className='rounded-[12px]'
            />
            <div className='flex flex-col justify-between px-2'>
              <h4 className='h-[50px] overflow-hidden'>
                برگزاری مجمع عمومی عادی سالانه شرکت مهندسی ساختمان و تاسیسات راه
                آهن (بالاست)
              </h4>
              <div className='flex justify-end gap-1'>
                <Icon name='calendar' classes='text-xl text-black' />
                <span className='text-black c1_regular'>12 آبان 1404</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
