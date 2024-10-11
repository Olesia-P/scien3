import React from 'react';
import css from './section-intro.module.scss';

export default function SectionIntro() {
  const textSection1 = {
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
        <p className={css.caption}>{textSection1.caption}</p>
      </hgroup>
      <img
        src="intro-image.png"
        alt="abstract illustration of plastic casting"
        className={css.backphoto1}
      />
      <ul className={css.listBox}>
        {textSection1.list.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </section>
  );
}
