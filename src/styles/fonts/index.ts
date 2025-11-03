import localFont from 'next/font/local';

const fontYekanBakhFaNum = localFont({
  src: [
    {
      path: '../../../public/static/fonts/yekanBakhFaNum/YekanBakhFaNum-Thin.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/yekanBakhFaNum/YekanBakhFaNum-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/yekanBakhFaNum/YekanBakhFaNum-SemiBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/yekanBakhFaNum/YekanBakhFaNum-ExtraBold.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--fontYekanBakhFaNum',
  display: 'swap',
});

const fontRavi = localFont({
  src: [
    {
      path: '../../../public/static/fonts/ravi/Ravi-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--fontRavi',
  display: 'swap',
});

const fontYekanBakhEn = localFont({
  src: [
    {
      path: '../../../public/static/fonts/yekanBakhEnNum/YekanBakhEn-Thin.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/yekanBakhEnNum/YekanBakhEn-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/yekanBakhEnNum/YekanBakhEn-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/yekanBakhEnNum/YekanBakhEn-Fat.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--fontYekanBakhEn',
  display: 'swap',
});

const fontLato = localFont({
  src: [
    {
      path: '../../../public/static/fonts/lato/Lato-Thin.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/lato/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/lato/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/lato/Lato-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--fontLato',
  display: 'swap',
});

export { fontLato, fontRavi, fontYekanBakhEn, fontYekanBakhFaNum };
