import React, { useState } from 'react';
import cx from 'classnames';
import css from '../styles/page-styles/services.module.scss';

export default function Services() {
  const textServices = {
    links: [
      {
        name: '3D моделювання',
        link: '/',
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
  const [isBetween, setIsBetween] = useState(false);
  // console.log('isBetween', isBetween);
  return (
    <main className={css.container}>
      {/* <div className={css.illustrationsWrap}> */}
      <img
        src="services/oie_FZTI5GqZYUlC.jpg"
        className={cx(css.illustrationLeft, isBetween && css.isBetween)}
        alt=""
      />{' '}
      <ul className={css.linksWrap}>
        {textServices.links.map((element) => (
          <li key={element.name}>{element.name}</li>
        ))}
      </ul>
      <img
        src="services/oie_pgHBLZla9K13.jpg"
        className={cx(css.illustrationRight, isBetween && css.isBetween)}
        alt=""
      />
      {/* </div> */}
      <button onClick={() => setIsBetween(!isBetween)} type="button">
        between
      </button>
    </main>
  );
}
