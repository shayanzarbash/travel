import type { Metadata } from 'next';
import React from 'react';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default async function RequestDetailLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}): Promise<JSX.Element> {
  return <div className='star_container'> {children}</div>;
}
