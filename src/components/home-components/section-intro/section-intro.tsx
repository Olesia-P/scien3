import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-intro.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { textSectionIntro } from '@/texts/home/text-section-intro';
import SectionIntroHeader from './section-intro-header/section-intro-header';
import { useLanguage } from '@/hooks/use-language';

export default function SectionIntro() {
  const language = useLanguage();

  const {
    caption,
    ourProducts,
    // illustrationLargeAlt, illustrationSmallAlt
  } = textSectionIntro[language];

  const [isObserved, setIsObserved] = useState(false);

  const introSectionRef = useIntersectionObserver<HTMLDivElement>(
    () => setIsObserved(true),
    undefined,
    0,
  );

  // eslint-disable-next-line no-console
  // console.log(window.devicePixelRatio);

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
        {/* <img
          src="intro/intro-scene.jpg"
          alt={illustrationLargeAlt}
          className={css.illustrationLarge}
          // loading="lazy"
        /> */}

        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="
            /intro/dragon_400.webp 400w,
            /intro/dragon_795.webp 795w,
            /intro/dragon_795.png 795w"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="
            /intro/intro_scene_1400.webp 1400w,
            /intro/intro_scene_1400.jpg 1400w,
            /intro/intro_scene_1920.webp 1920w,
            /intro/intro_scene_1920.jpg 1920w,
             /intro/intro_scene_2200.webp 2200w,
             /intro/intro_scene_2200.jpg 2200w"
            // sizes="100vw"
          />
          <img
            src="/intro/intro_scene_1400.jpg"
            alt=""
            className={css.illustration}
            sizes="100vw"
          />
        </picture>

        {/* for tablet <= 1024px */}
        {/* <img
          src="intro/dragon.png"
          alt={illustrationSmallAlt}
          className={cx(css.illustrationSmall, isObserved && css.animated)}
        /> */}
      </section>
    </div>
  );
}
