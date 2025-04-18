import React, { useState } from 'react';
import cx from 'classnames';
import css from './works-img-card.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';

type WorksImgCardProps = {
  img: string;
  webp: string;
  alt: string;
};

export default function WorksImgCard({ img, alt, webp }: WorksImgCardProps) {
  const [isWorksCardObserved, setIsWorksCardObserved] = useState(false);

  const worksCardRef = useIntersectionObserver<HTMLAnchorElement>(
    () => setIsWorksCardObserved(true),
    undefined,
    0,
  );
  return (
    <article
      className={cx(css.card, isWorksCardObserved && css.animated)}
      key={img}
      ref={worksCardRef}
    >
      <div className={css.imgLimit}>
        <img srcSet={`${webp}`} src={img} alt={alt} />
      </div>
    </article>
  );
}
