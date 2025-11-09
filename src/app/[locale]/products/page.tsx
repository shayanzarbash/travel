import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Products from '@/components/products/Products';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Page() {
  return (
    <div className='star_container lg:pb-[120px]'>
      <Breadcrumb />
      <Products />
    </div>
  );
}
