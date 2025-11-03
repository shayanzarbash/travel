import { useTranslations } from 'next-intl';
import { FC } from 'react';

import CardLocation from '@/components/card-location/CardLocation';
import CardTerms from '@/components/card-terms/CardTerms';
import CardWhite from '@/components/card-white/CardWhite';
import Chips from '@/components/chips/Chips';
import Title from '@/components/title/Title';

import mocks from '@/app/[locale]/(nests)/nests/detail/mocks';
import Icon from '@/ui-kit/icon/Icon';

const DetailMain: FC = () => {
  const t = useTranslations('Detail');

  return (
    <div className='flex flex-1 flex-col gap-3 lg:gap-5'>
      <CardWhite className='gap-2 lg:gap-4'>
        <h6 className='t1_bold lg:t1_black text-text-primary'>سوییت شماره ۳</h6>
        <Title icon='description' text={t('suite_description')} />
        <p className='b2_regular text-text-primary'>
          هتل ۵ ستاره و مجلل الماس دو از گروه هتل های الماس در اسفند ماه سال
          ۱۳۹۵ افتتاح شد. این هتل با نام هتل الماس دو با ۲۱۸ اتاق با امکانات
          رفاهی ویژه در۲۵ طبقه با الهام از معماری خاص ملل مختلف به سبک های
          مختلفی چون سبک ایران باستان، سبک روسی، ترکی، رومی، آفریقایی، عربی،
          ایرانی، اتاق صفوی و ... موزه ای از هنر های بین المللی را به نمایش
          گذاشته است. هتل الماس با پرسنلی مجرب و اموزش دیده با افتخار آماده
          میزبانی از شما میهمانان گرامی می‌باشند.
          <br /> نکته قابل توجه : استعمال دخانیات در این هتل ممنوع می‌باشد.
        </p>
        <div className='flex items-center gap-1'>
          <Icon
            name='info'
            classes='text-stroke-secondary text-lg lg:text-2xl'
          />
          <h6 className='b2_regular text-text-orange'>
            {t('cancellation_conditions')}
          </h6>
        </div>
      </CardWhite>
      <CardWhite className='gap-2 lg:gap-3'>
        <Title icon='description' text={t('suite_facilities')} />
        <div className='flex flex-wrap gap-2'>
          {mocks.chips.map((mock_item) => (
            <Chips key={mock_item} text={mock_item} />
          ))}
        </div>
      </CardWhite>
      <CardTerms
        entrance_hour={mocks.entrance_hour}
        leaving_hour={mocks.leaving_hour}
        documents={mocks.documents}
        other_terms={mocks.other_terms}
      />
      <CardLocation />
    </div>
  );
};

export default DetailMain;
