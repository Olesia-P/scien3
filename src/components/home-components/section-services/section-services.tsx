import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from './section-services.module.scss';

export default function SectionServices() {
  const textSectionServices = {
    links: [
      {
        name: '3D моделювання',
        link: '/modeling-3d',
        img: 'services/3d-modeling.jpg',
        alt: 'ілюстрація 3Д-моделювання',
      },
      {
        name: 'Серійне лиття',
        link: '/',
        img: 'services/mass-production.jpg',
        alt: 'ілюстрація серійного лиття пластикових продуктів',
      },
      {
        name: '3D друк',
        link: '/',
        img: 'services/3d-printer.jpg',
        alt: '3Д-принтер',
      },
      {
        name: 'Форми для лиття',
        link: '/',
        img: 'services/silicon-form.jpg',
        alt: 'силіконова форма',
      },
    ],
  };

  return (
    <section className={css.container}>
      <div className={css.cardBorder}>
        <nav className={css.servicesNavigation}>
          {textSectionServices.links.map((element) => (
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
