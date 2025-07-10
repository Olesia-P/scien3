import { useRouter } from 'next/router';

export type Language = 'uk' | 'en';

export const useLanguage = (): Language => {
  const { query } = useRouter();
  const { lang } = query;

  if (lang === 'uk' || lang === 'en') {
    return lang;
  }

  return 'uk';
};
