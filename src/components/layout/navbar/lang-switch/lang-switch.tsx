import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import css from './lang-switch.module.scss';
import { textLangSwitch } from '@/texts/layout/text-lang-switch';
import { changeLanguage } from '@/store/modules/language-slice';
import { RootState } from '@/store/store';
import { setCookie } from '@/utils/cookies';

type SwitchProps = {
  fontSize: 's' | 'm' | 'l';
};

export default function LangSwitch({ fontSize }: SwitchProps) {
  const { language } = useSelector(({ language }: RootState) => language);
  const [isSwitchedToEN, setIsSwitchedToEN] = useState(false);
  const [isPendingGlobalLanguageChanging, setIsPendingGlobalLanguageChanging] =
    useState(false);
  const dispatch = useDispatch();

  const { switchToUkrainian, switchToEnglish, chosenEnglish, chosenUkrainian } =
    textLangSwitch[language];

  useEffect(() => {
    if (isPendingGlobalLanguageChanging) {
      const valueLang = isSwitchedToEN ? 'en' : 'ua';
      dispatch(changeLanguage(valueLang));
      setCookie('language', valueLang, 30);
      setIsPendingGlobalLanguageChanging(false);
    }
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
