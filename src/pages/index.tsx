import React from 'react';
import css from '../styles/page-styles/home.module.scss';

export default function Home() {
  return (
    <main className={css.container}>
      <hgroup className={css.brand}>
        <h1>Scien3 Cast Creations</h1>
        {/* <div className={css.descriptionBackground}> */}
        {/* <div className={css.descriptionCard}> */}
        <p className={css.description}>
          3D-ДРУК ТА ДРІБНОСЕРІЙНЕ ЛИТТЯ З ПЛАСТИКУ У ВАКУУМІ
        </p>
        {/* </div> */}
        {/* </div> */}
      </hgroup>
      <img
        src="Untitled design (2).png"
        alt="3D-printer-themed"
        className={css.backphoto1}
      />{' '}
      {/* <article className={css.descriptionBox}>
      
        <ul>
          <li>Промисловий дизайн</li>
          <li>3D-моделювання</li>
          <li>Серійне виробництво виробів із пластику</li>
          <li>3D-друк</li>
          <li> Прототипування</li>
          <li> Виготовлення силіконових форм на замовлення</li>
        </ul>
      </article> */}
    </main>
  );
}
