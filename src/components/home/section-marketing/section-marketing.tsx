/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import cx from 'classnames';
import css from './section-marketing.module.scss';

export default function SectionMarketing() {
  const textSectionMarketing = {
    statements: [
      {
        question: 'Ви маєте ідею, але не знаєте, з чого почати?',
        answer: () => (
          <>
            Ми допоможемо із <span> розробкою з нуля </span> або{' '}
            <span>виготовимо виріб за ескізом</span>.
          </>
        ),

        img: 'marketing/sketch.png',
        position: 'right',
      },
      {
        question: 'Вам треба дрібносерійна партія деталей *ще на вчора*? ',
        answer: () => (
          <>
            Виробимо у кількості 1-1000 штук, що дозволить вам{' '}
            <span> зекономити бюджет </span>
            та вкластися <span> у термін кількох днів</span>.
          </>
        ),
        img: 'marketing/multiple.png',
        position: 'left',
      },
      {
        question: 'Маєте зношену або поламану деталь?',
        answer: () => (
          <>
            Ми зробимо її <span> точну копію</span>. Або навіть краще.
          </>
        ),

        img: 'marketing/replacement.png',
        position: 'right',
      },
      {
        question: 'Вашій колекції не вистачає фігурки леприкона?',
        answer: () => (
          <>
            У нас ви знайдете{' '}
            <span> широкий вибір матеріалів та кольорів </span> для художнього
            лиття або 3D-друку з <span> високою деталізацією</span>.
          </>
        ),
        img: 'marketing/leprechaun.png',
        position: 'left',
      },
      {
        question: 'Власноруч робите мило або шоколадки?',
        answer: () => (
          <>
            Виготовимо <span>унікальні силіконові форми</span>, яких не буде ні
            у кого, крім вас,
          </>
        ),

        img: 'marketing/soap-silicone-form.png',
        position: 'right',
      },
    ],
  };
  return (
    <section className={css.container}>
      <div className={css.background} />
      <ul className={css.card}>
        {textSectionMarketing.statements.map((element) => (
          <li
            key={element.question}
            className={cx(
              css.listPoint,
              element.position === 'right' ? css.right : css.left,
            )}
          >
            <img src={element.img} alt={element.img} className={css.img} />
            <h3 className={css.question}>&#128269; {element.question}</h3>
            <p className={css.answer}>{element.answer()}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
