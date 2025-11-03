import Price from '@/ui-kit/price/Price';

interface TPropsItemPayment {
  id?: number;
  price: number;
  name: string;
  time: string;
  date: string;
  status: string;
  status_title: string;
}

export const getStatusClasses = (
  status: string,
): {
  classText: string;
  classRight: string;
} => {
  switch (status) {
    case 'success':
      return {
        classText: 'text-green bg-successful',
        classRight: 'bg-green',
      };
    case 'failed':
      return {
        classText: 'text-error bg-failed',
        classRight: 'bg-error',
      };
    default:
      return {
        classText: 'border-stroke-fourth',
        classRight: '',
      };
  }
};

export default function PaymentCard({
  price,
  name,
  time,
  date,
  status,
  status_title,
}: TPropsItemPayment): JSX.Element {
  const { classText: statusText, classRight: statusRight } =
    getStatusClasses(status);

  return (
    <div className='relative mb-4 flex flex-col justify-between rounded-2xl border border-stroke-primary bg-background-2 p-2.5 sm:flex-row lg:p-3.5'>
      <span
        className={`absolute right-0 top-1/2 h-[48px] w-[4px] -translate-y-1/2 rounded-bl-md rounded-tl-md sm:h-[24px] md:h-[29px] ${statusRight}`}
      ></span>
      <div className='flex flex-col items-start justify-start pb-2 sm:flex-row sm:items-center sm:pb-0'>
        <div className='sm:px-4.5 rounded-md border border-stroke-primary p-2 px-2.5 py-0.5 lg:px-6'>
          <Price
            amount={price}
            className='b1_bold text-2xl text-stroke-tertiary'
            classNameUnit='c1_regular !text-stroke-secondry'
          />
        </div>
        <h5 className='b1_regular pr-0.5 pt-2 text-stroke-tertiary sm:pr-4 sm:pt-0'>
          {name}
        </h5>
      </div>
      <div className='flex justify-between sm:items-center'>
        <div className='flex items-baseline pr-0.5 sm:pr-0'>
          <h6 className='c1_regular pl-2'>{time}</h6>
          <span className='h-[7px] w-[1px] bg-stroke-primary'></span>
          <h6 className='c1_regular pr-2'>{date}</h6>
        </div>
        <h6
          className={`b2_bold absolute left-3 top-3 mr-3 rounded-2xl px-3 sm:relative sm:left-0 sm:top-0 ${statusText}`}
        >
          {status_title}
        </h6>
      </div>
    </div>
  );
}
