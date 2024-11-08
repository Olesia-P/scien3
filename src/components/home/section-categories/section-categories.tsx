import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from './section-categories.module.scss';

export default function SectionCategories() {
  const textSectionCategories = {
    links: [
      {
        name: '3D моделювання',
        link: '/',
        img: 'categories/3d-modeling.jpg',
        alt: 'ілюстрація 3Д-моделювання',
      },
      {
        name: 'Серійне лиття',
        link: '/',
        img: 'categories/mass-production.jpg',
        alt: 'ілюстрація серійного лиття пластикових продуктів',
      },
      {
        name: '3D друк',
        link: '/',
        img: 'categories/3d-printer.jpg',
        alt: '3Д-принтер',
      },
      {
        name: 'Форми для лиття',
        link: '/',
        img: 'categories/silicon-form.jpg',
        alt: 'силіконова форма',
      },
    ],
  };

  return (
    <section className={css.container}>
      <div className={css.cardBorder}>
        <nav className={css.servicesNavigation}>
          {textSectionCategories.links.map((element) => (
            <Link href={element.link} className={css.link} key={element.name}>
              <img src={element.img} alt={element.alt} />
              <h3>
                {element.name} <FaArrowRightLong />
              </h3>
            </Link>
          ))}
          <div className={css.horizontalSeparator} />
          <div className={css.verticalSeparator} />
        </nav>
      </div>
    </section>
  );
}
