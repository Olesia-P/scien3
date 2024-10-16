import React from 'react';
import css from './section-description.module.scss';

export default function SectionDescription() {
  const textSectionDescription = {
    header: 'Виготовлення виробів із пластмас будь-якої складності',
    list: [
      {
        text: 'Пропонуємо якісні послуги лиття із пластмас під низьким тиском.',
        icon: 'drop-icon.png',
      },
      {
        text: 'Забезпечуємо повний цикл: від вашої креативної ідеї до її повного втілення та виробництва.',
        icon: 'box-icon.png',
      },
      {
        text: 'Маємо ґрунтовний досвід та широку спеціалізацію, від дослідних моделей тонкого профілю до комплексних розробок нових виробів.',
        icon: 'cup-icon.png',
      },
      {
        text: 'Використовуємо індивідуальний підхід до кожного замовника, врахуємо всі ваші інтереси.',
        icon: 'angled-ball-icon.png',
      },
    ],
  };
  return (
    <section className={css.container}>
      <h2>
        <span className={css.accent}>[</span>
        {textSectionDescription.header}
        <span className={css.accent}>]</span>
      </h2>
      <ul>
        {textSectionDescription.list.map((element) => (
          <li key={element.icon}>
            <img src={element.icon} className={css.icon} alt={element.icon} />
            <p>{element.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
