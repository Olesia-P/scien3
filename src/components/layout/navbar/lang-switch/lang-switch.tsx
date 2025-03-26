import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
// import { RootState } from '@reduxjs/toolkit/query';
import css from './lang-switch.module.scss';
import { textLangSwitch } from '@/utils/texts/layout/text-lang-switch';
import { changeLanguage } from '@/store/modules/language-slice';

type SwitchProps = {
  fontSize: 's' | 'm' | 'l';
};

export default function LangSwitch({ fontSize }: SwitchProps) {
  const language = 'ua';
  const { switchToUkrainian, switchToEnglish, chosenEnglish, chosenUkrainian } =
    textLangSwitch[language];
  // const [isSwitched, setIsSwitched] = useState(false);
  const [isSwitchedToEN, setIsSwitchedToEN] = useState(false);

  const dispatch = useDispatch();

  // const lang = useSelector(({ language }: RootState) => language);
  // console.log('lang', lang);
  // console.log('isSwitchedToEN', isSwitchedToEN);

  const toSwitch = () => {
    setIsSwitchedToEN((prevState) => !prevState);
    // dispatch(changeLanguage(isSwitchedToEN ? 'en' : 'ua'));
    // dispatch(changeLanguage('en'));
  };

  useEffect(() => {
    dispatch(changeLanguage(isSwitchedToEN ? 'en' : 'ua'));
  }, [isSwitchedToEN]);

  return (
    <div className={css.container}>
      <div className={cx(css.caption, css[fontSize])}>ua</div>
      <button
        onClick={toSwitch}
        role="switch"
        // ?
        aria-checked={isSwitchedToEN}
        // ?
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
