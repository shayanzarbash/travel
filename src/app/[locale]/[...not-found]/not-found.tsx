'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import Button from '@/ui-kit/button/Button';

export default function NotFound(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] as Locale;
  type Locale = 'fa' | 'en';

  const content: Record<
    Locale,
    { title: string; description: string; buttonText: string; homeUrl: string }
  > = {
    en: {
      title: 'Page Not Found',
      description: '404',
      buttonText: 'Go Back Home',
      homeUrl: '/en',
    },
    fa: {
      title: 'صفحه‌‌ای یافت نشد',
      description: '404',
      buttonText: 'بازگشت به خانه',
      homeUrl: '/',
    },
  };

  const localeContent = content[currentLocale] ?? content.fa;

  return (
    <div className='flex flex-col items-center justify-center pt-24'>
      <h2 className='t1_black pb-3'>{localeContent.title}</h2>
      <h2 className='t1_black pb-5'>{localeContent.description}</h2>
      <div>
        <Image
          className='rounded-full bg-background-2'
          src='/static/images/error.png'
          alt='setareaval'
          width={400}
          height={400}
        />
      </div>
      <Button
        type='secondary'
        className='mt-8 border border-stroke-secondary'
        onClick={() => router.push(localeContent.homeUrl)}
      >
        {localeContent.buttonText}
      </Button>
    </div>
  );
}
