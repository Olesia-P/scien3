import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { setCookie } from '@/utils/cookies';

export default function useLayout() {
  const router = useRouter();

  useEffect(() => {
    const hasCookie = document.cookie.includes('language=');
    if (!hasCookie) {
      setCookie('language', 'ua', 365);
    }
  }, []);

  useEffect(() => {
    if (!('startViewTransition' in document)) return;
    const originalPush = router.push;
    (router as any).push = (...args: Parameters<typeof router.push>) => {
      return (document as any).startViewTransition(() => {
        return originalPush.apply(router, args as any);
      });
    };
  }, [router]);
}
