import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import css from '../styles/page-styles/works.module.scss';
import { textWorks } from '@/utils/texts/text-works';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import WorksImgCard from '@/components/works-components/works-img-card/works-img-card';
import { RootState } from '@/store/store';

export default function Works() {
  const { language } = useSelector(({ language }: RootState) => language);

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
          <h1 className={cx(isObserved && css.animated)}>
            <span aria-hidden="true">|</span>
            {mainHeader}
            <span aria-hidden="true">|</span>
          </h1>
          <p className={css.caption}>
            {caption}{' '}
            <a href="https://www.instagram.com/3d_scien3_ua?igsh=dDQ1OWxia29jaXpu">
              Instagram <FaArrowRightLong />{' '}
            </a>
          </p>
          <div className={cx(css.cardsWrap, isObserved && css.animated)}>
            {images.map((img) => (
              <WorksImgCard img={img} alt={alt} key={img} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
