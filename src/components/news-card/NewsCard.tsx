import Icon from '@/ui-kit/icon/Icon';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function NewsCard({
  data,
  width,
}: {
  data: NewsItem;
  width?: string;
}) {
  const { title, date, description, image } = data;

  return (
    <div
      className={`border-main w-[350px] overflow-hidden rounded-[24px] border back-linear-3 shadow-xl`}
    >
      <Image
        src={image}
        alt='logo'
        width={350}
        height={240}
        className='object-contain'
      />
      <div className='flex flex-col gap-4 p-5'>
        <Link href='###' className='border- flex items-center'>
          <h3 className='t2_bold h-[25px] overflow-hidden text-stroke-static'>
            {title}
          </h3>
        </Link>
        <span className='b2_regular text-stroke-static'>{date}</span>

        <p className='b1_regular text-stroke-static'>{description}</p>

        <div className='flex justify-end pt-3'>
          <Link
            href='###'
            className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-text-primary'
          >
            <Icon
              name='arrow_left_2'
              classes='text-text-static lg:text-2xl text-2xl'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
