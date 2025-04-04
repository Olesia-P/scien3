import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import css from './section-intro.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { textSectionIntro } from '@/texts/home/text-section-intro';
import SectionIntroHeader from './section-intro-header/section-intro-header';
import { RootState } from '@/store/store';

export default function SectionIntro() {
  const { language } = useSelector(({ language }: RootState) => language);

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
      <SectionIntroHeader caption={caption} isAnimated={isObserved} />

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
          className={cx(css.illustrationSmall, isObserved && css.animated)}
        />
      </section>
    </div>
  );
}
