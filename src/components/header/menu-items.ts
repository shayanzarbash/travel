
interface MenuItem {
  title: string;
  href?: string;
  submenu?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    title: 'صفحه اصلی',
    href: '/',
  },
  {
    title: 'مراکز ناواکو',
    submenu: [
      {
        title: 'تامین و توسعه سامانه های بانک مسکن',
        href: '/services/web-design',
      },
      {
        title: 'تامین و توسعه سامانه بانکداری متمرکز و دیجیتال',
        href: '/services/app-development',
      },
      {
        title: 'خدمات پرداخت الکترونیک',
        href: '/services/app-development',
      },
      {
        title: 'مدیریت عملیات و خدمات پشتیبانی',
        href: '/services/app-development',
      },
      {
        title: 'خدمات مشاوره و مدیریت فاوری های بانکی',
        href: '/services/app-development',
      },
      {
        title: 'آموزش و آکادمی هوش مالی',
        href: '/services/app-development',
      },
    ],
  },
  {
    title: 'محصولات',
    submenu: [
      { title: 'تمام محصولات', href: '/products/finance' },
      { title: 'سامانه پرداخت الکترونیک عوارض ', href: '/products/crm' },
      {
        title: 'معاینه فنی خودروهای سنگین و نیمه سنگین',
        href: '/products/automation',
      },
      { title: 'توسعه کیوسک دیجیتال', href: '/products/finance' },
      { title: 'سامانه آموزشی LMS', href: '/products/finance' },
      { title: 'توسعه کیوسک دیجیتال', href: '/products/finance' },
      { title: 'تامین و پشتیبانی دستگاه‌های پوز', href: '/products/finance' },
      { title: 'وبسایت کارگزاری بانک مسکن', href: '/products/finance' },
      { title: 'سامانه داشبورد مدیریتی', href: '/products/finance' },
      { title: 'پورتال کارگزاری بیمه', href: '/products/finance' },
      { title: 'زنجیره تأمین مالی', href: '/products/finance' },
      { title: 'بازارگاه مسکن', href: '/products/finance' },
    ],
  },
  {
    title: 'بلاگ',
    submenu: [
      { title: ' اخبار ناواکو', href: '/products/finance' },
      { title: 'مقالات', href: '/products/crm' },
    ],
  },
  {
    title: 'درباره ما',
    submenu: [
      { title: 'ناواکو', href: '/fa/about-us' },
      { title: 'چارت سازمانی', href: '/products/crm' },
      { title: 'فرصت های شغلی', href: '/products/crm' },
    ],
  },
];
