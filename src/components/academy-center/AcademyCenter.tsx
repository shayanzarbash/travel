import Image from 'next/image';

export default function AcademyCenter() {
  return (
    <>
      <div className='text-white back-linear-3 mt-10 flex justify-between rounded-[24px] border-main p-8 pb-16 pl-24 pr-8 pt-12'>
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
              <span className='pr-4 t1_bold text-stroke-static'>
                مرکز آموزش و آکادمی هوش مالی
              </span>
            </div>
          </div>
          <div className='flex flex-col items-start gap-12 md:flex-row'>
            <div className='max-w-3xl text-lg leading-relaxed'>
              <p className='t2_light text-justify text-stroke-static'>
                شرکت فناوری و اطلاعات ناواکو، به‌عنوان شرکت مادر تخصصی فناوری و
                نوآوری بانک مسکن، یکی از پیشگامان صنعت فناوری اطلاعات در کشور
                به‌شمار می‌رود.
              </p>

              <p className='t2_light text-justify text-stroke-static'>
                ناواکو با تکیه بر شبکه‌ای گسترده از مراکز تخصصی و نیروهای خبره
                در سراسر کشور، مأموریت خود را بر توسعه و به‌کارگیری راهکارهای
                نوآورانه در حوزه‌های بانکداری، پرداخت الکترونیک، خدمات مالی،
                سامانه‌های نرم‌افزاری و زیرساخت‌های هوشمند متمرکز کرده است.
              </p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <div className='bg-gray-200 text-gray-500 flex h-48 w-48 items-center justify-center rounded-lg text-2xl font-medium'>
            <Image
              src='/static/images/home/avatar.png'
              alt='logo'
              width={165}
              height={187}
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </>
  );
}
