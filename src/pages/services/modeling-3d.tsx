import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from '../../styles/page-styles/modeling-3D.module.scss';
import ServiceInfoList from '@/components/services-components/service-info-list/service-info-list';

export default function Modeling3D() {
  const textModeling3D = {
    main: {
      header: 'Промисловий 3D-дизайн',
      description:
        "Створення 3D-моделі (або 3D-дизайн) - це процес розробки за допомогою комп'ютерної графіки комплексної цифрової тривимірної моделі майбутнього виробу. ",
    },
    img: {
      link: '/services/3D-modeling-process.jpeg',
      alt: "Монітор комп'ютера із зображенням 3D моделі дрона",
    },
    useCases: {
      header: 'Де буде корисною 3D-модель?',
      list: [
        '- Друк прототипів на 3D-принтері',
        '- Візуалізація майбутнього виробу',
        '- Виготовлення деталей на фрезерних верстатах з ЧПУ',
        '- Виготовлення жорстких ливарних форм',
      ],
    },
    stages: {
      header: 'Етапи створення 3D-моделі',
      list: [
        {
          header: 'Формування технічного завдання (ТЗ):',
          list: [
            '- Визначення мети створення моделі (виробництво, візуалізація, симуляція)',
            '- Аналіз документації (креслення, ескізи, технічні характеристики)',
            '- Вибір матеріалів',
            '- Визначення необхідного рівня деталізації та масштабування',
          ],
        },
        {
          header: 'Розробка концепції та попередня візуалізація',
          list: [
            '- Створення ручних або цифрових ескізів',
            '- Створення початкової концептуальної моделі з використанням базових форм',
            '- Узгодження концепції з замовником',
          ],
        },
        {
          header: '3D-моделювання',
          list: [
            '- Розробка базової геометрії моделі',
            '- Додавання дрібних елементів (отвори, ребра, канавки)',
            '- Створення текстур для візуалізації',
          ],
        },
        {
          header: 'Фінальна валідація',
          list: [
            '- Погодження кінцевої моделі з замовником',
            '- Надання всіх необхідних файлів і документації',
            '- Планування подальшого виробництва',
          ],
        },
        {
          header: 'Адаптація моделі до обраного способу виробництва',
          list: [
            '- Поділ моделі на сегменти для виробничих потреб, створення креслень, схем складання, специфікацій',
            '- Експорт файлів у необхідному форматі для 3D-друку або ЧПК-обробки',
          ],
        },
      ],
    },
    product: {
      header: 'Що ви отримуєте?',
      list: [
        '- Готову 3D-модель в STL форматі',
        '- Можливість виготовлення прототипу виробу, на базі створеної цифрової моделі',
      ],
    },
    button: 'Інші послуги',

    contacts: {
      header: 'Зробіть замовлення вже сьогодні!',
      phone: {
        text: '+38(068)-987-36-00',
        icon: '/icons/phone-icon.png',
      },

      email: {
        text: 'some email',
        icon: '/icons/email-icon.png',
      },
    },
    backgroundStyle: 1,
  };

  const decideBackgroundStyle = () => {
    switch (textModeling3D.backgroundStyle) {
      case 1:
        return css.style1;
      case 2:
        return css.style2;
      case 3:
        return css.style3;
      case 4:
        return css.style3;
      default:
        return css.style1;
    }
  };

  return (
    <main className={cx(css.container, decideBackgroundStyle())}>
      <article className={css.mainContent}>
        <img
          src={textModeling3D.img.link}
          alt={textModeling3D.img.alt}
          className={css.illustration}
        />

        <h1 className={css.mainHeader}>{textModeling3D.main.header}</h1>

        <p className={css.description}>{textModeling3D.main.description}</p>

        <ServiceInfoList
          header={textModeling3D.useCases.header}
          list={textModeling3D.useCases.list}
          headerSize={2}
          hasNestedList={false}
        />

        <ServiceInfoList
          list={textModeling3D.stages.list}
          header={textModeling3D.stages.header}
          headerSize={2}
          hasNestedList
          nestedListIcon="/icons/laptop-icon.png"
        />

        <ServiceInfoList
          header={textModeling3D.product.header}
          list={textModeling3D.product.list}
          headerSize={2}
          hasNestedList={false}
        />

        <section className={css.contacts}>
          <h2 className={css.contactsHeader}>
            {textModeling3D.contacts.header}
          </h2>
          <ul className={css.contactsWrap}>
            <a className={css.singleContact} href="tel:+380689873600">
              {textModeling3D.contacts.phone.text}
            </a>
            <button type="button" className={css.singleContact}>
              {textModeling3D.contacts.email.text}
            </button>
          </ul>
        </section>

        <Link href="/services" className={css.otherServicesLink}>
          {textModeling3D.button} <FaArrowRightLong />
        </Link>
      </article>
    </main>
  );
}
