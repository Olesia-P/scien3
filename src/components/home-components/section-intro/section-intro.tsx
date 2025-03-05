import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-intro.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { textSectionIntro } from '@/utils/texts/home/text-section-intro';
import SectionIntroHeader from './section-intro-header/section-intro-header';

export default function SectionIntro() {
  const language = 'ua';

  const { caption, ourProducts, illustrationLargeAlt, illustrationSmallAlt } =
    textSectionIntro[language];

  const [isObserved, setIsObserved] = useState(false);

  const introSectionRef = useIntersectionObserver<HTMLDivElement>(
    () => setIsObserved(true),
    undefined,
    0,
  );

  return (
    <div className={css.container} ref={introSectionRef}>
      <SectionIntroHeader caption={caption} />

      <section className={css.mainContent}>
        <div className={css.listLimit}>
          <ul className={cx(css.ourServicesList, isObserved && css.animated)}>
            {ourProducts.map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </div>

        {/* for desktop > 1024px */}
        <img
          src="intro/intro-scene.jpg"
          alt={illustrationLargeAlt}
          className={css.illustrationLarge}
        />

        {/* for tablet <= 1024px */}
        <img
          src="intro/dragon.png"
          alt={illustrationSmallAlt}
          className={css.illustrationSmall}
        />
      </section>
    </div>
  );
}
