import React from 'react';
import cx from 'classnames';
import css from './lang-switch.module.scss';
import useLanguageSwitch from './use-language-switch';

type SwitchProps = {
  fontSize: 's' | 'm' | 'l';
};

export default function LangSwitch({ fontSize }: SwitchProps) {
  const {
    switchToUkrainian,
    switchToEnglish,
    chosenEnglish,
    chosenUkrainian,
    handleSwitch,
    isSwitchedToEN,
  } = useLanguageSwitch();

  return (
    <div className={css.container}>
      <div className={cx(css.caption, css[fontSize])}>ua</div>
      <button
        onClick={handleSwitch}
        role="switch"
        aria-checked={isSwitchedToEN}
        aria-label={isSwitchedToEN ? switchToUkrainian : switchToEnglish}
        type="button"
      >
        <div className={cx(css.switch, isSwitchedToEN && css.right)}>
          <img
            src={isSwitchedToEN ? '/icons/en.png' : '/icons/uk.png'}
            alt={isSwitchedToEN ? chosenEnglish : chosenUkrainian}
          />
        </div>

        <div className={css.background}>
          <img src="/icons/uk.png" alt={switchToUkrainian} />
          <img src="/icons/en.png" alt={switchToEnglish} />
        </div>
      </button>
      <div className={cx(css.caption, css[fontSize])}>en</div>
    </div>
  );
}
