import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from './card-item.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';

type CardItemProps = {
  link: string;
  imgSrc: string;
  alt: string;
  text: string;
};

export default function CardItem({ link, imgSrc, alt, text }: CardItemProps) {
  const [isCardItemObserved, setIsCardItemObserved] = useState(false);

  const cardItemRef = useIntersectionObserver<HTMLAnchorElement>(
    () => setIsCardItemObserved(true),
    undefined,
    0,
  );
  return (
    <Link
      href={link}
      className={cx(css.link, isCardItemObserved && css.animated)}
      ref={cardItemRef}
    >
      <img src={imgSrc} alt={alt} />
      <h3 className={css.caption}>
        {text} <FaArrowRightLong />
      </h3>
    </Link>
  );
}
