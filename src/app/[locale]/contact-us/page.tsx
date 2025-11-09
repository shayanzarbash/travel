import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import ContactMap from '@/components/contact-map/ContactMap';
import AccordionSection from '@/components/faq-section/FaqSection';
import Image from 'next/image';
import ContactForm from '@/components/contact-form/ContactForm';

const contactInfo = [
  {
    title: 'نشانی',
    value:
      'تهران، سعادت آباد، میدان کاج، سرو شرقی، نبش علامه شمالی، پلاک۵۰ کدپستی: ۱۹۹۷۹۹۸۸۴۵',
  },
  {
    title: 'پست الکترونیک',
    value: 'info@navaco.ir',
  },
  {
    title: 'فکس',
    value: '۰۲۱-۸۸۳۸۱۱۵۸',
  },
  {
    title: 'ارتباط با ما',
    value: '۰۲۱-۴۳۳۹۶۰۰۰',
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function ContactUsPage() {
  return (
    <>
      <div>
        <div className='star_container lg:pb-[120px]'>
          <Breadcrumb />

          <div className='text-white back-linear-3 mt-2 flex flex-col justify-between rounded-[24px] p-8 pb-8 pl-8 pr-8 pt-8'>
            <div>
              <h2 className='h2_black pb-7 text-stroke-static'>تماس با ما</h2>
              <div className='border-static mb-10 border-b border-background-3 opacity-20' />
              <div className='flex gap-5 px-2 py-2'>
                <div>
                  {contactInfo.map((item, index) => (
                    <div key={index} className='pb-6'>
                      <h4 className='t1_bold text-stroke-static'>
                        {item.title}:
                      </h4>
                      <p className='t2_regular text-stroke-static'>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <Image
                    src='/static/images/home/map.png'
                    alt=''
                    width={600}
                    height={400}
                    className='rounded-[12px] object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
          <ContactMap />
          <AccordionSection />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
