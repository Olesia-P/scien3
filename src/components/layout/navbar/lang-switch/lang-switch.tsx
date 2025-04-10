import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import css from './lang-switch.module.scss';
import { textLangSwitch } from '@/texts/layout/text-lang-switch';
import { useLanguage } from '@/hooks/use-language';
import { setCookie } from '@/utils/cookies';

type SwitchProps = {
  fontSize: 's' | 'm' | 'l';
};

export default function LangSwitch({ fontSize }: SwitchProps) {
  const language = useLanguage();
  const [isSwitchedToEN, setIsSwitchedToEN] = useState(false);
  const [isPendingGlobalLanguageChanging, setIsPendingGlobalLanguageChanging] =
    useState(false);

  const { switchToUkrainian, switchToEnglish, chosenEnglish, chosenUkrainian } =
    textLangSwitch[language];

  const router = useRouter();

  useEffect(() => {
    if (isPendingGlobalLanguageChanging) {
      const valueLang = isSwitchedToEN ? 'en' : 'ua';

      setCookie('language', valueLang, 365);

      const { pathname } = router;
      const segments = pathname.split('/');
      segments[1] = valueLang;
      const newPathname = segments.join('/');

      router.replace(
        {
          pathname: newPathname,
          // query,
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
    } else if (language === 'ua') {
      setIsSwitchedToEN(false);
    }
  }, [language]);

  const toSwitch = () => {
    setIsSwitchedToEN((prevState) => !prevState);
    setIsPendingGlobalLanguageChanging(true);
  };

  return (
    <div className={css.container}>
      <div className={cx(css.caption, css[fontSize])}>ua</div>
      <button
        onClick={toSwitch}
        role="switch"
        aria-checked={isSwitchedToEN}
        aria-label={isSwitchedToEN ? switchToUkrainian : switchToEnglish}
        type="button"
      >
        <div className={cx(css.switch, isSwitchedToEN && css.right)}>
          <img
            src={
              isSwitchedToEN
                ? '/icons/united-kingdom-icon.png'
                : '/icons/ukraine-icon.png'
            }
            alt={isSwitchedToEN ? chosenEnglish : chosenUkrainian}
          />
        </div>

        <div className={css.background}>
          <img src="/icons/ukraine-icon.png" alt={switchToUkrainian} />
          <img src="/icons/united-kingdom-icon.png" alt={switchToEnglish} />
        </div>
      </button>
      <div className={cx(css.caption, css[fontSize])}>en</div>
    </div>
  );
}
