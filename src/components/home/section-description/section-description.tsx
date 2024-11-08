import React from 'react';
import css from './section-description.module.scss';

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
        icon: '/icons/box-icon.png',
      },
      {
        text: 'Маємо ґрунтовний досвід та широку спеціалізацію, від дослідних моделей тонкого профілю до комплексних розробок нових виробів.',
        icon: '/icons/cup-icon.png',
      },
      {
        text: 'Використовуємо індивідуальний підхід до кожного замовника, врахуємо всі ваші інтереси.',
        icon: '/icons/angled-ball-icon.png',
      },
    ],
  };
  return (
    <article className={css.container}>
      <h2 className={css.mainHeader}>
        <span aria-hidden="true">|</span>
        {textSectionDescription.header}
        <span aria-hidden="true">|</span>
      </h2>
      <ul className={css.descriptionList}>
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
