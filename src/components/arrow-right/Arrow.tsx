// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function ScrollRight() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 rotate-90'>
      <span className='arrow animate-arrow' />
      <span className='arrow animate-arrow h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#ffffff] delay-[150ms]' />
      <span className='arrow animate-arrow h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#ffffff] delay-[300ms]' />

      <div className='flex items-center justify-center rounded-[20px]'>
        <span className='arrow animate-arrow h-3 w-3 rotate-90 border-b-2 border-r-2 border-[#ffffff] delay-[150ms]' />
      </div>
    </div>
  );
}
