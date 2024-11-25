import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-intro.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function SectionIntro() {
  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };
  const introSectionRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0,
  );

  const textSectionIntro = {
    caption: 'ДРІБНОСЕРІЙНЕ ЛИТТЯ З ПЛАСТИКУ У ВАКУУМІ ТА 3D-ДРУК',
    list: [
      'Серійне виробництво виробів із пластику',
      'Промисловий дизайн',
      '3D-моделювання',
      'Прототипування',
      '3D-друк',
      'Виготовлення силіконових форм на замовлення',
    ],
    illustrationAlt: 'абстрактна ілюстрація лиття пластику',
  };

  return (
    <section className={css.container} ref={introSectionRef}>
      <hgroup className={css.mainHeader}>
        <div className={css.contentLimit}>
          <h1>Scien3 Cast Creations</h1>
          <p>{textSectionIntro.caption}</p>
        </div>
      </hgroup>
      <div className={css.contentLimit}>
        <ul className={cx(css.introList, isObserved && css.animated)}>
          {textSectionIntro.list.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      </div>
      <img
        src="intro/intro-scene.jpg"
        alt={textSectionIntro.illustrationAlt}
        aria-hidden="true"
        className={css.illustration}
      />
    </section>
  );
}
