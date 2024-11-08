import React, { useState } from 'react';
import cx from 'classnames';
import css from './lang-switch.module.scss';

export default function LangSwitch() {
  const textLangSwitch = {
    ariaLabelSwitchToUkrainian: 'Перемкнути на українську',
    ariaLabelSwitchToEnglish: 'Перемкнути на англійську',
    altChosenEnglish: 'Вибрана мова: англійська',
    altChosenUkrainian: 'Вибрана мова: українська',
  };
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
        aria-label={
          isSwitched
            ? textLangSwitch.ariaLabelSwitchToUkrainian
            : textLangSwitch.ariaLabelSwitchToEnglish
        }
        type="button"
      >
        <div className={cx(css.switch, isSwitched && css.right)}>
          <img
            src={
              isSwitched
                ? 'icons/united-kingdom-icon.png'
                : 'icons/ukraine-icon.png'
            }
            alt={
              isSwitched
                ? textLangSwitch.altChosenEnglish
                : textLangSwitch.altChosenUkrainian
            }
          />
        </div>

        <div className={css.background}>
          <img
            src="icons/ukraine-icon.png"
            alt="Switch to Ukrainian language"
          />
          <img
            src="icons/united-kingdom-icon.png"
            alt="Switch to English language"
          />
        </div>
      </button>
      <div className={css.caption}>en</div>

      {/* <div className={css.captions}>
        <div>ua</div>
        <div>en</div>
      </div> */}
    </div>
  );
}
