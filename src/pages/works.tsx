import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import cx from 'classnames';
import css from '../styles/page-styles/works.module.scss';
import { textWorks } from '@/utils/texts/text-works';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function Works() {
  const language = 'ua';
  const { alt, images, mainHeader, caption } = textWorks[language];

  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };

  const worksRef = useIntersectionObserver(handleIntersection, undefined, 0);

  return (
    <main className={css.container} ref={worksRef}>
      <div className={css.outline}>
        <section className={css.contentWrap}>
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
          <div className={cx(css.cardsWrap, isObserved && css.animated)}>
            {images.map((img) => (
              <article className={css.card} key={img}>
                <div className={css.imgControl}>
                  <img src={img} alt={alt} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
