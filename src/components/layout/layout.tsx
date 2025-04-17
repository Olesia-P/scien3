import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
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

  const router = useRouter();

  useEffect(() => {
    if (!('startViewTransition' in document)) return;

    const originalPush = router.push;

    (router as any).push = (...args: Parameters<typeof router.push>) => {
      return (document as any).startViewTransition(() => {
        return originalPush.apply(router, args as any);
      });
    };
  }, [router]);
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
