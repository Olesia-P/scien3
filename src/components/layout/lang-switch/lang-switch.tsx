import React, { useState } from 'react';
import cx from 'classnames';
import css from './lang-switch.module.scss';
import { textLangSwitch } from '@/utils/texts/layout/text-lang-switch';

export default function LangSwitch() {
  const language = 'ua';
  const { switchToUkrainian, switchToEnglish, chosenEnglish, chosenUkrainian } =
    textLangSwitch[language];
  const [isSwitched, setIsSwitched] = useState(false);
  const toSwitch = () => {
    setIsSwitched((prevState) => !prevState);
  };
  return (
    <div className={css.container}>
      <div className={css.caption}>ua</div>
      <button
        onClick={toSwitch}
        role="switch"
        aria-checked={isSwitched}
        aria-label={isSwitched ? switchToUkrainian : switchToEnglish}
        type="button"
      >
        <div className={cx(css.switch, isSwitched && css.right)}>
          <img
            src={
              isSwitched
                ? '/icons/united-kingdom-icon.png'
                : '/icons/ukraine-icon.png'
            }
            alt={isSwitched ? chosenEnglish : chosenUkrainian}
          />
        </div>

        <div className={css.background}>
          <img src="/icons/ukraine-icon.png" alt={switchToUkrainian} />
          <img src="/icons/united-kingdom-icon.png" alt={switchToEnglish} />
        </div>
      </button>
      <div className={css.caption}>en</div>
    </div>
  );
}
