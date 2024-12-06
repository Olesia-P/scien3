import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from '../styles/page-styles/works.module.scss';

export default function Works() {
  const worksImgs = {
    alt: 'Зразок продукту лиття або 3D-друку',
    images: [
      '/works/1.png',
      '/works/2.png',
      '/works/3.png',
      '/works/4.png',
      '/works/5.png',
      '/works/6.png',
      '/works/7.png',
      '/works/8.png',
      '/works/9.png',
      '/works/10.png',
      '/works/11.png',
      '/works/12.png',
      '/works/13.png',
      '/works/14.png',
      '/works/15.png',
      '/works/16.png',
      '/works/17.png',
      '/works/18.png',
    ],
  };

  const text = {
    mainHeader: 'Приклади наших робіт',
    caption: 'Більше робіт в нашому',
  };
  return (
    <main className={css.container}>
      <div className={css.outline}>
        <section className={css.mainCard}>
          <h1>
            <span>|</span>
            {text.mainHeader}
            <span>|</span>
          </h1>
          <p className={css.caption}>
            {text.caption}{' '}
            <a href="https://www.instagram.com/3d_scien3_ua?igsh=dDQ1OWxia29jaXpu">
              Instagram <FaArrowRightLong />{' '}
            </a>
          </p>
          <div className={css.cardsWrap}>
            {worksImgs.images.map((img) => (
              <article className={css.card} key={img}>
                <img src={img} alt={worksImgs.alt} />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
