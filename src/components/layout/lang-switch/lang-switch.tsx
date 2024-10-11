import React, { useState } from 'react';
import cx from 'classnames';
import css from './lang-switch.module.scss';

export default function LangSwitch() {
  const [isSwitched, setIsSwitched] = useState(false);
  const img = isSwitched ? 'united-kingdom.png' : 'ukraine.png';
  const toSwitch = () => {
    setIsSwitched((prevState) => !prevState);
  };
  return (
    // <div className={css.container}>
    <div className={css.bodyWrap}>
      <div className={css.body}>
        <div
          className={cx(css.switch, isSwitched && css.right)}
          onClick={toSwitch}
        >
          <img src={img} alt={img} />
        </div>
      </div>
      <div className={css.background} onClick={toSwitch}>
        <img src="ukraine.png" alt="ua-lang" />
        <img src="united-kingdom.png" alt="en-lang" />
      </div>
      {/* </div> */}

      {/* <div className={css.captions}>
        <div>ua</div>
        <div>en</div>
      </div> */}
    </div>
  );
}
