import { useEffect } from 'react';
import { setCookie } from '@/utils/cookies';

export default function useLayout() {
  useEffect(() => {
    const hasCookie = document.cookie.includes('language=');
    if (!hasCookie) {
      setCookie('language', 'uk', 365);
    }
  }, []);
}
