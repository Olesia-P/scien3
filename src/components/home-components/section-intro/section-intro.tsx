import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-intro.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { textSectionIntro } from '@/utils/texts/home/text-section-intro';

export default function SectionIntro() {
  const language = 'ua';

  const { caption, ourProducts, illustrationLargeAlt, illustrationSmallAlt } =
    textSectionIntro[language];

  const [isObserved, setIsObserved] = useState(false);

  const introSectionRef = useIntersectionObserver(
    () => setIsObserved(true),
    undefined,
    0,
  );

  return (
    <section className={css.container} ref={introSectionRef}>
      <hgroup className={css.mainHeader}>
        <div className={css.headerWrapper}>
          <h1>Scien3 Cast Creations</h1>
          <p>{caption}</p>
        </div>
      </hgroup>

      <div className={css.contentWrap}>
        <div className={css.listWrap}>
          <ul className={cx(css.list, isObserved && css.animated)}>
            {ourProducts.map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </div>

        <img
          src="intro/intro-scene.jpg"
          alt={illustrationLargeAlt}
          aria-hidden="true"
          className={css.illustrationLarge}
        />

        <img
          src="intro/dragon.png"
          alt={illustrationSmallAlt}
          aria-hidden="true"
          className={css.illustrationSmall}
        />
      </div>
    </section>
  );
}
