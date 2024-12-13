import React from 'react';
import cx from 'classnames';
import localFont from 'next/font/local';
import Navbar from './navbar/navbar';

type LayoutProps = {
  children: React.ReactNode;
};

// const logoFont = localFont({ src: '../../../public/fonts/Teko Medium.woff' });
const mainFont = localFont({ src: '../../../public/fonts/Onest-Medium.ttf' });
// const monoFont = localFont({ src: '../../../public/fonts/GeistMonoVF.woff' });
// const fancyFont = localFont({
//   src: '../../../public/fonts/PricedownBl-Regular.ttf',
// });

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={cx(
        // logoFont.className,
        // monoFont.className,
        // fancyFont.className,
        mainFont.className,
      )}
    >
      <Navbar />
      {children}
    </div>
  );
}
