import React from 'react';
import css from './section-categories.module.scss';

export default function SectionCategories() {
  return (
    <section className={css.container}>
      {/* <img src="pngwing.com (25).png" className={css.backgroundImg} alt="ghg" /> */}
      <header className={css.header}>
        <h2>
          Виготовленні виробів із пластмас будь-якої складності, від вашої
          креативної ідеї до її повного втілення та виробництва.
        </h2>
      </header>
    </section>
  );
}
