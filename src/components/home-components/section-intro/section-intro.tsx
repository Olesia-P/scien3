import React, { useState } from 'react';
import cx from 'classnames';
import localFont from 'next/font/local';
import css from './section-intro.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { textSectionIntro } from '@/utils/texts/home/text-section-intro';

const logoFont = localFont({
  src: '../../../../public/fonts/Teko Medium.woff',
});
const monoFont = localFont({
  src: '../../../../public/fonts/GeistMonoVF.woff',
});

export default function SectionIntro() {
  const language = 'ua';

  const { caption, ourProducts, illustrationAlt } = textSectionIntro[language];

  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };
  const introSectionRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0,
  );

  return (
    <section className={css.container} ref={introSectionRef}>
      <hgroup className={css.mainHeader}>
        <div className={css.contentLimit}>
          <h1 className={logoFont.className}>Scien3 Cast Creations</h1>
          <p className={monoFont.className}>{caption}</p>
        </div>
      </hgroup>
      <div className={css.contentLimit}>
        <ul className={cx(css.introList, isObserved && css.animated)}>
          {ourProducts.map((product) => (
            <li key={product}>{product}</li>
          ))}
        </ul>
      </div>
      <img
        src="intro/intro-scene.jpg"
        alt={illustrationAlt}
        aria-hidden="true"
        className={css.illustration}
      />
    </section>
  );
}
