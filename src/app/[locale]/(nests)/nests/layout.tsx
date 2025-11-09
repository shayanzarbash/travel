import type { Metadata } from 'next';

// import '@/styles/globals.css';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default async function CityLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}): Promise<JSX.Element> {
  return <div className='star_container lg:pb-[120px]'> {children}</div>;
}
