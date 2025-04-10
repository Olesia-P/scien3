import React, { useEffect } from 'react';
import Navbar from './navbar/navbar';
import { setCookie } from '@/utils/cookies';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const hasCookie = document.cookie.includes('language=');
    if (!hasCookie) {
      setCookie('language', 'ua', 365);
    }
  }, []);
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
