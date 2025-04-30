import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import css from './section-intro.module.scss';
import SectionIntroHeader from './section-intro-header/section-intro-header';
import useSectionIntro from './use-section-intro';

export default function SectionIntro() {
  const { caption, isAnimated, ourProducts, language, illustrationAlt } =
    useSectionIntro();

  return (
    <div className={css.container}>
      <SectionIntroHeader caption={caption} isAnimated={isAnimated} />

      <section className={css.mainContent}>
        <div className={css.listLimit}>
          <ul className={cx(css.ourServicesList, isAnimated && css.animated)}>
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
            alt={illustrationAlt}
            className={cx(css.illustration, isAnimated && css.animated)}
            sizes="100vw"
          />
        </picture>
      </section>
    </div>
  );
}
