import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from '../styles/page-styles/works.module.scss';
import { textWorks } from '@/utils/texts/text-works';

export default function Works() {
  const language = 'ua';
  const { alt, images, mainHeader, caption } = textWorks[language];

  return (
    <main className={css.container}>
      <div className={css.outline}>
        <section className={css.mainCard}>
          <h1>
            <span>|</span>
            {mainHeader}
            <span>|</span>
          </h1>
          <p className={css.caption}>
            {caption}{' '}
            <a href="https://www.instagram.com/3d_scien3_ua?igsh=dDQ1OWxia29jaXpu">
              Instagram <FaArrowRightLong />{' '}
            </a>
          </p>
          <div className={css.cardsWrap}>
            {images.map((img) => (
              <article className={css.card} key={img}>
                <img src={img} alt={alt} />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
