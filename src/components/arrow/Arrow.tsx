// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function ScrollIndicator() {
  return (
    <div className='flex flex-col items-center gap-2'>
      <span className='arrow animate-arrow' />
      <span className='arrow animate-arrow h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#ffffff] delay-[150ms]' />
      <span className='arrow animate-arrow h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#ffffff] delay-[300ms]' />

      <div className='flex h-[58px] w-[42px] items-center justify-center rounded-2xl rounded-[20px] bg-[#2A3148]'>
        <span className='arrow animate-arrow h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#ffffff] delay-[150ms]' />
      </div>
    </div>
  );
}
