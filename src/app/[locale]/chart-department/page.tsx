import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Image from 'next/image';

const ChartPerson = [
  {
    id: 1,
    title: 'هوشنگ بشارتیان',
    post: 'مدیرعامل',
    email: 'h.besharatian@navaco.ir',
    image: '/static/images/home/pic-1.png',
  },
  {
    id: 2,
    title: 'پرویز وکیلی صادقی',
    post: 'رئیس هیأت مدیره',
    email: 'p.vakili@navaco.ir',
    image: '/static/images/home/pic-2.png',
  },
  {
    id: 3,
    title: 'مهدی فتح اله',
    post: 'نایب رئیس هیأت مدیره',
    email: 'm.fathollah@navaco.ir',
    image: '/static/images/home/pic-3.png',
  },
  {
    id: 4,
    title: 'علیرضا سمیعی',
    post: 'عضو هیأت مدیره',
    email: 'a.samiei@navaco.ir',
    image: '/static/images/home/pic-4.png',
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function ChartDepartment() {
  return (
    <>
      <div>
        <div className='star_container lg:pb-[120px]'>
          <Breadcrumb />

          <div className='text-white back-linear-3 mt-2 flex flex-col justify-between rounded-[24px] p-8 pb-8 pl-8 pr-8 pt-8'>
            <div>
              <h2 className='h2_black pb-7 text-stroke-static'>
                اعضای هیأت مدیره
              </h2>
              <div className='border-static mb-10 border-b border-background-3 opacity-20' />
            </div>
            <div className='flex gap-6 pt-1'>
              {ChartPerson.map((item) => (
                <div key={item.id} className='flex max-w-[285px] pb-6'>
                  <div className='back-linear-3 border-main flex flex-col items-start rounded-[24px]'>
                    <Image
                      src={item.image}
                      alt='logo'
                      width={285}
                      height={240}
                      className='rounded-tl-[24px] rounded-tr-[24px] object-contain'
                    />
                    <div className='px-5'>
                      <h3 className='t2_bold pt-5 text-stroke-static'>
                        {item.title}
                      </h3>
                      <p className='b2_regular pt-3 text-stroke-static'>
                        {item.post}
                      </p>
                      <p className='b1_regular pb-7 pt-3 text-stroke-static'>
                        {item.email}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col items-center justify-center pt-20 text-center'>
            <h2 className='h2_black pb-20 text-stroke-static'>چارت سازمانی</h2>
            <Image
              src='/static/images/home/chart-1.png'
              alt='logo'
              width={1064}
              height={1176}
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </>
  );
}
