import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function AboutCompany() {
  return (
    <div className='flex items-center justify-center pb-28'>
      <div className='relative flex w-full flex-row-reverse items-center gap-12'>
        {/* ----- ROBOT ----- */}
        <div className='flex justify-center md:justify-end'>
          <div className='w-365 h-365 md:w-365 md:w-365 ml-[-40px]'>
            <Image
              src='/static/images/home/robot.png'
              alt='logo'
              width={275}
              height={306}
            />
          </div>
        </div>
        <div className='text-white max-w-4xl space-y-6 text-right'>
          <p className='t2_light text-justify leading-relaxed text-text-static'>
            شرکت فناوری و اطلاعات ناواکو، به‌عنوان شرکت مادر تخصصی فناوری و
            نوآوری بانک مسکن، یکی
            <br />
            از پیشگامان صنعت فناوری اطلاعات در کشور به‌شمار می‌رود. ناواکو با
            تکیه بر شبکه‌ای گسترده از مراکز تخصصی و نیروهای خبره در سراسر کشور،
            مأموریت خود را بر توسعه و به‌کارگیری راهکارهای نوآورانه در حوزه‌های
            بانکداری، پرداخت الکترونیک، خدمات مالی، سامانه‌های نرم‌افزاری و
            زیرساخت‌های هوشمند متمرکز کرده است.
          </p>
          <p className='t2_light pt-2.5 text-justify leading-relaxed text-text-static'>
            با رویکردی داده‌محور و دانش‌بنیان، ناواکو تلاش می‌کند تا فناوری‌های
            نوین را در خدمت ارتقای کارایی، امنیت و تحول دیجیتال در نظام بانکی و
            مالی کشور قرار دهد. این شرکت با اتکا بر تجربه‌های ارزشمند و
            زیرساخت‌های قدرتمند خود، به طراحی و پیاده‌سازی راه‌حل‌هایی می‌پردازد
            که سازمان‌ها را در مسیر هوشمندسازی، تحول و رشد پایدار همراهی می‌کند.
          </p>
        </div>
      </div>
    </div>
  );
}
