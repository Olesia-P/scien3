import React, { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import css from './section-intro.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { textSectionIntro } from '@/texts/home/text-section-intro';
import SectionIntroHeader from './section-intro-header/section-intro-header';
import { useLanguage } from '@/hooks/use-language';
import useMediaQuery from '@/hooks/use-media-query';

export default function SectionIntro() {
  const language = useLanguage();

  const { caption, ourProducts, illustrationLargeAlt, illustrationSmallAlt } =
    textSectionIntro[language];

  const [isObserved, setIsObserved] = useState(false);

  const introSectionRef = useIntersectionObserver<HTMLDivElement>(
    () => setIsObserved(true),
    undefined,
    0,
  );

  const isLargeScreen = useMediaQuery(1024);
  const chooseAlt = () => {
    return isLargeScreen ? illustrationLargeAlt : illustrationSmallAlt;
  };

  return (
    <div className={css.container} ref={introSectionRef}>
      <SectionIntroHeader caption={caption} isAnimated={isObserved} />

      <section className={css.mainContent}>
        <div className={css.listLimit}>
          <ul className={cx(css.ourServicesList, isObserved && css.animated)}>
            {ourProducts.map((product) => (
              <li key={product.name}>
                <Link href={`/${language}${product.link}`} className={css.link}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="
            /intro/dragon_400.webp 400w, 
            /intro/dragon_400.png 400w"
            sizes="80vw"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="
            /intro/dragon_795.webp 795w,
            /intro/dragon_795.png 795w"
            sizes="40vw"
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
          />
          <img
            src="/intro/intro_scene_1400.jpg"
            alt={chooseAlt()}
            className={cx(css.illustration, isObserved && css.animated)}
            sizes="100vw"
          />
        </picture>
      </section>
    </div>
  );
}
