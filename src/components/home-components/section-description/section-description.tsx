import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-description.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function SectionDescription() {
  const textSectionDescription = {
    header: 'Виготовлення виробів із пластмас будь-якої складності',
    list: [
      {
        text: 'Пропонуємо якісні послуги лиття із пластмас під низьким тиском.',
        icon: '/icons/drop-icon.png',
      },
      {
        text: 'Забезпечуємо повний цикл: від вашої креативної ідеї до її повного втілення та виробництва.',
        icon: '/icons/arrows-icon.png',
      },
      {
        text: 'Маємо ґрунтовний досвід та широку спеціалізацію, від дослідних моделей тонкого профілю до комплексних розробок нових виробів.',
        icon: '/icons/medal-icon.png',
      },
      {
        text: 'Використовуємо індивідуальний підхід до кожного замовника, врахуємо всі ваші інтереси.',
        icon: '/icons/angled-ball-icon.png',
      },
    ],
  };
  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };
  const descriptionSectionRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0.5,
  );

  return (
    <article className={css.container} ref={descriptionSectionRef}>
      <h2 className={css.mainHeader}>
        <span aria-hidden="true">|</span>
        {textSectionDescription.header}
        <span aria-hidden="true">|</span>
      </h2>
      <ul className={cx(css.descriptionList, isObserved && css.isAnimated)}>
        {textSectionDescription.list.map((element) => (
          <li
            key={element.icon}
            style={
              {
                '--icon-url': `url(${element.icon})`,
              } as React.CSSProperties
            }
          >
            <p>{element.text}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
