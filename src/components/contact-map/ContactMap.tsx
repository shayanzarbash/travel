import Image from 'next/image';

const contactInfo = [
  {
    title: 'شعبه مرکزی ',
    address: 'تهران، سعادت آباد، میدان کاج، سرو شرقی، نبش علامه شمالی، پلاک۵۰',
    phone: '1234567',
    postalCode: '۱۹۹۷۹۹۸۸۴۵',
  },
  {
    title: 'شعبه شرق ',
    address: 'تهران، خیابان 17شهریور پایین تراز میدان شهدا جنب پمپ بنزین پلاک123 شعبه شهدا طبقه اول',
    phone: 'شماره تماس: 1234567',
    postalCode: 'کدپستی: ۱۹۹۷۹۹۸۸۴۵',
  },
  {
    title: 'شعبه غرب ',
    address: 'تهران، بالاتر از ميدان ونک، خيابان شهيد خدامي، پلاک 58',
    phone: 'شماره تماس: 1234567',
    postalCode: 'کدپستی: ۱۹۹۷۹۹۸۸۴۵',
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function ContactMap() {
  return (
    <>
      <div className='flex flex-col pt-40'>
        <h1 className='h2_black pb-20 text-center text-stroke-static'>
          دفاتر نمایندگی
        </h1>
        <div className='flex gap-6'>
          <div className='text-white back-linear-3 mt-2 flex w-[50%] basis-2/4 flex-col justify-between rounded-[24px] p-8 pb-8 pl-8 pr-8 pt-8'>
            <div>
              {contactInfo.map((item, index) => (
                <div key={index} className='pb-6'>
                  <h4 className='t1_bold text-stroke-static'>{item.title}:</h4>
                  <p className='t2_regular text-stroke-static'>
                    {item.address}
                  </p>
                  <p className='t2_regular text-stroke-static'>{item.phone}</p>
                  <p className='t2_regular text-stroke-static'>{item.postalCode}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-[50%] basis-2/4'>
            <Image
              src='/static/images/home/map-1.png'
              alt=''
              width={608}
              height={550}
              className='rounded-[12px] object-cover'
            />
          </div>
        </div>
      </div>
    </>
  );
}
