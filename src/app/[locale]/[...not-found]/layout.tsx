import React from 'react';

// import '@/styles/globals.css';

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <div className='star_container'>{children}</div>
    </>
  );
}
