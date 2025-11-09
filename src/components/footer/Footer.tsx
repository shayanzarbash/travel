'use client';

import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Footer() {
  return (
    <footer className="text-white relative bg-[linear-gradient(180deg,rgba(11,23,46,1)_0%,rgba(10,22,44,1)_40%,rgba(8,18,37,1)_100%)] px-6 py-12 before:absolute before:bottom-0 before:left-0 before:h-[120px] before:w-full before:bg-[url('/static/images/home/footer2.png')] before:bg-contain before:bg-bottom before:bg-no-repeat before:content-[''] md:px-12">
      {/* top section */}
      <div className='star_container'>
        <div className='flex gap-10 md:grid-cols-3'>
          <div className='flex max-w-[10%] basis-[10%] flex-col items-center gap-4 md:items-start'>
            <h5 className='mb-4 font-bold text-stroke-static'>اطلاع‌رسانی</h5>
            <Link className='b1_regular text-stroke-static' href='###'>
              اخبار ناواکو
            </Link>
            <Link className='b1_regular text-stroke-static' href='###'>
              مقالات
            </Link>
            <Link className='b1_regular text-stroke-static' href='###'>
              مقالات
            </Link>
          </div>

          <div className='flex flex-1 flex-col items-center gap-4 md:items-start'>
            <h5 className='mb-4 font-bold text-stroke-static'>دسترسی سریع</h5>
            <Link className='b1_regular text-stroke-static' href='###'>
              بانک مسکن
            </Link>
            <Link className='b1_regular text-stroke-static' href='###'>
              گروه مالی بانک مسکن
            </Link>
            <Link className='b1_regular text-stroke-static' href='###'>
              آکادمی آموزشی
            </Link>
          </div>

          <div className='flex flex-col items-center gap-2 md:items-start'>
            <h5 className='mb-4 font-bold text-stroke-static'>شبکه اجتماعی</h5>
            <p className='text-sm text-stroke-static'>
              ما را در شبکه های اجتماعی دنبال کنید
            </p>

            <div className='mt-4 flex gap-4'>
              {/* place icons */}
              <div className='align-center flex h-[56px] w-[56px] justify-center rounded-2xl bg-text-secondary'>
                <Link href='###' className='align-center flex'>
                  <Image
                    src='/static/images/home/ins.svg'
                    alt='سامانش'
                    width={24}
                    height={24}
                    className='text-white transition-transform group-hover:scale-110'
                  />
                </Link>
              </div>
              <div className='align-center flex h-[56px] w-[56px] justify-center rounded-2xl bg-text-secondary'>
                <Link href='###' className='align-center flex'>
                  <Image
                    src='/static/images/home/twit.svg'
                    alt='سامانش'
                    width={24}
                    height={24}
                    className='text-white transition-transform group-hover:scale-110'
                  />
                </Link>
              </div>
              <div className='align-center flex h-[56px] w-[56px] justify-center rounded-2xl bg-text-secondary'>
                <Link href='###' className='align-center flex'>
                  <Image
                    src='/static/images/home/linke.svg'
                    alt='سامانش'
                    width={24}
                    height={24}
                    className='text-white transition-transform group-hover:scale-110'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='my-10 border-b border-background-3 opacity-20' />

        {/* contact + address */}
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          <div className='flex-1'>
            <p className='t2_regular text-right text-stroke-static'>
              آدرس: تهران، سعادت آباد، میدان کاج، سرو شرقی، نبش علامه، پلاک ۵
            </p>
          </div>

          <div className='flex items-center gap-4 pl-12'>
            <div className=''>
              <Image
                src='/static/images/home/call-calling2.svg'
                alt='ناواکو'
                width={32}
                height={32}
              />
            </div>

            <span className='t2_regular text-stroke-static'>
              021 - 423396000
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <Image
              src='/static/images/home/sms.svg'
              alt='ناواکو'
              width={32}
              height={32}
            />

            <span className='t2_regular text-stroke-static'>
              Info@navaco.com
            </span>
          </div>
        </div>

        <div className='flex items-center justify-between pt-16'>
          <div className='z-10 flex flex-col items-start'>
            <p className='b1_regular mt-6 text-center text-stroke-static'>
              طراحی و توسعه ناواکو، ایران سال 1403
            </p>
            <p className='b1_regular mt-2 text-center text-stroke-static'>
              © تمامی حقوق محفوظ و متعلق به شرکت ناواکو است.
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <a href='https://samanesh.ir' target='_blank' rel='noopener'>
              <Image
                src='/static/images/home/neshan.png'
                alt='سامانش'
                width={69}
                height={92}
              />
            </a>
            <a href='https://navaco.ir' target='_blank' rel='noopener'>
              <Image
                src='/static/images/home/ozv.png'
                alt='ناواکو'
                width={67}
                height={98}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
