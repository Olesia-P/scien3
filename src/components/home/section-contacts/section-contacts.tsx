import React from 'react';
import css from './section-contacts.module.scss';

export default function SectionContacts() {
  // const textSectionContacts = {
  //   list: [
  //     {
  //       text: 'Ми пропонуємо вам якісні послуги лиття із пластмас під низьким тиском.',
  //       icon: 'oie_XDD4sF0ZVSbO.png',
  //     },
  //     {
  //       text: 'Забезпечуємо повний цикл - від вашої креативної ідеї до її повного втілення та виробництва.',
  //       icon: 'oie_rO28awyBOeSG.png',
  //     },
  //     {
  //       text: 'Це може бути дослідна модель тонкого профілю або комплексна розробка нового виробу.',
  //       icon: 'oie_5Cn54SMJ3sF5.png',
  //     },
  //     {
  //       text: 'Багатий досвід інженерно-технічного складу Scien3 дозволяє використовувати індивідуальний підхід до кожного замовника, враховуючи всі ваші інтереси.',
  //       icon: 'oie_UNSNi8TjXvzB.png',
  //     },
  //   ],
  // };
  return (
    <section className={css.container}>
      <header>
        {' '}
        <h4>Дзвоніть та замовляйте!</h4>
        <p>Ми проконсультуємо та допоможемо з підбором матеріалів.</p>
      </header>

      <div className={css.contactsWrap}>
        <img
          src="/contacts/Designer.png"
          className={css.illustration}
          alt="contacts-section-background"
        />
        <aside className={css.contactsCard}>
          <h5>Контакти</h5>
          <p>вулиця Вінстона Черчилля, 42А</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3134611455907!2d30.63728290644443!3d50.45694614088012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daac5317ae83%3A0xf5450b4ea3b09a48!2z0LLRg9C70LjRhtGPINCS0ZbQvdGB0YLQvtC90LAg0KfQtdGA0YfQuNC70LvRjywgNDLQkCwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1729060035949!5m2!1suk!2sua"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            className={css.map}
          />
        </aside>
      </div>
    </section>
  );
}
