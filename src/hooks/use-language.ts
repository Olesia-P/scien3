import { useRouter } from 'next/router';

export type Language = 'ua' | 'en';

export const useLanguage = (): Language => {
  const { query } = useRouter();
  const { lang } = query;

  if (lang === 'ua' || lang === 'en') {
    return lang;
  }

  return 'ua'; // fallback
};
