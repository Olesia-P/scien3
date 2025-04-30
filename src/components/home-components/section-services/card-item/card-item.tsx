import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from './card-item.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { useLanguage } from '@/hooks/use-language';

type CardItemProps = {
  link: string;
  img: string;
  webp: string;
  alt: string;
  text: string;
};

export default function CardItem({
  link,
  img,
  webp,
  alt,
  text,
}: CardItemProps) {
  const language = useLanguage();

  const [isCardItemObserved, setIsCardItemObserved] = useState(false);

  const cardItemRef = useIntersectionObserver<HTMLAnchorElement>(
    () => setIsCardItemObserved(true),
    undefined,
    0,
  );

  return (
    <Link
      href={`/${language}${link}`}
      className={cx(css.link, isCardItemObserved && css.animated)}
      ref={cardItemRef}
    >
      <img srcSet={webp} src={img} alt={alt} loading="lazy" />

      <h3 className={css.caption}>
        {text} <FaArrowRightLong />
      </h3>
    </Link>
  );
}
