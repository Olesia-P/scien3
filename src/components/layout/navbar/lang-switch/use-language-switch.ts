import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/hooks/use-language';
import { textLangSwitch } from '@/texts/layout/text-lang-switch';
import { setCookie } from '@/utils/cookies';

export default function useLanguageSwitch() {
  const language = useLanguage();
  const { switchToUkrainian, switchToEnglish, chosenEnglish, chosenUkrainian } =
    textLangSwitch[language];

  const [isSwitchedToEN, setIsSwitchedToEN] = useState(false);
  const [isPendingGlobalLanguageChanging, setIsPendingGlobalLanguageChanging] =
    useState(false);

  const router = useRouter();

  const handleSwitch = () => {
    setIsSwitchedToEN((prevState) => !prevState);
    setIsPendingGlobalLanguageChanging(true);
  };

  useEffect(() => {
    if (isPendingGlobalLanguageChanging) {
      const valueLang = isSwitchedToEN ? 'en' : 'uk';
      setCookie('language', valueLang, 365);

      const { pathname } = router;
      const segments = pathname.split('/');
      segments[1] = valueLang;
      const newPathname = segments.join('/');

      router.replace(
        {
          pathname: newPathname,
        },
        undefined,
        { shallow: true },
      );
    }
    setIsPendingGlobalLanguageChanging(false);
  }, [isPendingGlobalLanguageChanging]);

  useEffect(() => {
    if (language === 'en') {
      setIsSwitchedToEN(true);
    } else if (language === 'uk') {
      setIsSwitchedToEN(false);
    }
  }, [language]);

  return {
    switchToUkrainian,
    switchToEnglish,
    chosenEnglish,
    chosenUkrainian,
    handleSwitch,
    isSwitchedToEN,
  };
}
