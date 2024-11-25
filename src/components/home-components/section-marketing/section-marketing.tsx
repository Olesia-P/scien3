import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-marketing.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function SectionMarketing() {
  const textSectionMarketing = {
    statements: [
      {
        question: 'Ви маєте ідею, але не знаєте, з чого почати?',
        answer: (
          <>
            Ми допоможемо із <mark> розробкою з нуля </mark> або{' '}
            <mark>виготовимо виріб за ескізом</mark>.
          </>
        ),

        img: 'marketing/sketch.png',
        alt: 'зарис пластикової деталі',
      },
      {
        question: 'Вам треба дрібносерійна партія деталей *ще на вчора*? ',
        answer: (
          <>
            Виробимо у кількості 1-1000 штук, що дозволить вам{' '}
            <mark> зекономити бюджет </mark>
            та вкластися <mark> у термін кількох днів</mark>.
          </>
        ),
        img: 'marketing/multiple-details.png',
        alt: 'кілька однакових чохлів для телефона',
      },
      {
        question: 'Маєте зношену або поламану деталь?',
        answer: (
          <>
            Ми зробимо її <mark> точну копію</mark>. Або навіть краще.
          </>
        ),

        img: 'marketing/detail-replacement.png',
        alt: 'зламана деталь поряд із ідентичною цілою деталлю',
      },
      {
        question: 'Вашій колекції не вистачає фігурки леприкона?',
        //
        answer: (
          <>
            У нас ви знайдете{' '}
            <mark> широкий вибір матеріалів та кольорів </mark> для лиття або
            3D-друку з <mark> високою деталізацією</mark>.
          </>
        ),
        img: 'marketing/leprechaun.png',
        alt: 'пластиова фігурка леприкона',
      },
      {
        question: 'Власноруч робите мило або шоколадки?',
        answer: (
          <>
            Виготовимо <mark>унікальні силіконові форми</mark>, яких не буде ні
            у кого, крім вас,
          </>
        ),

        img: 'marketing/soap-silicone-mold.png',
        alt: 'силіконова форма для мила у формі Маріо',
      },
    ],
  };
  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };
  const marketingSectionRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0,
  );
  return (
    <section className={css.container} ref={marketingSectionRef}>
      <ul className={cx(css.statementsList, isObserved && css.isAnimated)}>
        {textSectionMarketing.statements.map((element) => (
          <li className={css.statementCard} key={element.question}>
            <img
              src={element.img}
              alt={element.alt}
              className={css.statementIllustration}
              aria-hidden="true"
            />
            <h3 className={css.question}>&#128269; {element.question}</h3>
            <p className={css.answer}>{element.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
