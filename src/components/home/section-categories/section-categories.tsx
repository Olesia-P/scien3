import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from './section-categories.module.scss';

export default function SectionCategories() {
  const textSectionCategories = {
    header: 'Виготовленні виробів із пластмас будь-якої складності!',
    links: [
      { name: '3D моделювання', link: '/', img: 'categories/3d-modeling.jpeg' },
      {
        name: 'Серійне лиття',
        link: '/',
        img: 'categories/mass-production.jpeg',
      },
      { name: '3D друк', link: '/', img: 'categories/3d-printer.jpeg' },
      {
        name: 'Форми для лиття',
        link: '/',
        img: 'categories/silicon-form.jpeg',
      },
    ],
  };

  return (
    <section className={css.container}>
      <h2>
        <span className={css.accent}>[</span>
        {textSectionCategories.header}
        <span className={css.accent}>]</span>
      </h2>
      <div className={css.cardBorder}>
        <article className={css.card}>
          {textSectionCategories.links.map((element) => (
            <Link href={element.link} className={css.link} key={element.name}>
              <img
                src={element.img}
                className={css.linkImg}
                alt={element.img}
              />
              <h3 className={css.name}>
                {element.name} <FaArrowRightLong />
              </h3>
            </Link>
          ))}
          <div className={css.horizontalSeparator} />
          <div className={css.verticalSeparator} />
        </article>
      </div>
    </section>
  );
}
