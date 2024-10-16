import React from 'react';
import css from './section-intro.module.scss';

export default function SectionIntro() {
  const textSectionIntro = {
    caption: '3D-ДРУК ТА ДРІБНОСЕРІЙНЕ ЛИТТЯ З ПЛАСТИКУ У ВАКУУМІ',
    list: [
      'Серійне виробництво виробів із пластику',
      'Промисловий дизайн',
      '3D-моделювання',
      'Прототипування',
      '3D-друк',
      'Виготовлення силіконових форм на замовлення',
    ],
  };

  return (
    <section className={css.container}>
      <hgroup className={css.brand}>
        <h1>Scien3 Cast Creations</h1>
        <p className={css.caption}>{textSectionIntro.caption}</p>
      </hgroup>
      <div className={css.imgWrap}>
        <img
          src="intro/intro-image.png"
          alt="abstract illustration of plastic casting"
          className={css.backgroundImage}
        />
        <ul className={css.listBox}>
          {textSectionIntro.list.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
