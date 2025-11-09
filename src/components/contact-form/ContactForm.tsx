import Button from '@/ui-kit/button/Button';
import Input from '@/ui-kit/input/Input';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function ContactForm() {
  return (
    <div className='text-white back-linear-3 mt-20 flex flex-col justify-between rounded-[24px] p-8 pb-8 pl-8 pr-8 pt-8'>
      <h4 className='pb-8 text-b1_regular text-stroke-static'>
        از طریق ارسال پیام میتوانید با کارشناسان ما درارتباط باشید.
      </h4>
      <form>
        <Input placeholder='نام و نام خانوادگی' className='mb-4 w-full' />
        <Input placeholder='آدرس ایمیل' className='mb-4 w-full' />
        <textarea
          placeholder='متن پیام'
          className='border-gray-300 focus:ring-blue-500 mb-4 h-32 w-full resize-none rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2'
        ></textarea>
        <Button
          className='float-left h-[72px] w-[240px] bg-blue text-b1_regular_md'
          type='button'
          disabled={true}
        >
          ارسال پیام
        </Button>
      </form>
    </div>
  );
}
