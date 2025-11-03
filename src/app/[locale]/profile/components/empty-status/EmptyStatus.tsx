import Image from 'next/image';

export default function EmptyStatus({
  src,
  title,
}: {
  src: string;
  title: string;
}): JSX.Element {
  return (
    <div className='flex flex-col items-center justify-center pt-4'>
      <Image src={src} alt={title} width={300} height={200} />
      <h5 className='t2_bold pt-10 text-center text-stroke-tertiary'>
        {title}
      </h5>
    </div>
  );
}
