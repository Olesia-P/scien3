import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import cx from 'classnames';
import css from '../../styles/page-styles/services.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function Services() {
  const textServices = {
    header: 'Ми надаємо такі послуги:',
    links: [
      {
        name: '3D моделювання',
        link: '/services/modeling-3D',
        img: 'services/bw-3d-modeling.png',
        alt: 'ілюстрація 3Д-моделювання',
      },
      {
        name: 'Серійне лиття',
        link: '/services/mass-production',
        img: 'services/bw-mass-production.png',
        alt: 'ілюстрація серійного лиття пластикових продуктів',
      },
      {
        name: '3D друк',
        link: '/services/printing-3D',
        img: 'services/bw-3d-printer.png',
        alt: '3Д-принтер',
      },
      {
        name: 'Форми для лиття',
        link: '/services/molds',
        img: 'services/bw-silicone-mold.png',
        alt: 'силіконова форма',
      },
    ],
  };
  // const [isBetween, setIsBetween] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const ref = useIntersectionObserver(() => setIsAnimated(true), undefined, 0);

  // useEffect(() => {
  //   setIsBetween(true);
  // }, []);

  // console.log(isImageLoaded, 'isImageLoaded');

  useEffect(() => {
    const allImages = document.querySelectorAll('img');
    const areAllImagesLoaded = Array.from(allImages).every(
      (img) => img.complete,
    );

    if (areAllImagesLoaded) {
      setIsImageLoaded(true);
    }
  }, []);

  return (
    <main className={css.container} ref={ref}>
      <img
        src="services/left-curtain.png"
        className={cx(
          css.illustrationLeft,
          isImageLoaded && isAnimated && css.animated,
        )}
        alt="left part of a decorative illustration of a workshop"
        aria-hidden="true"
        onLoad={handleImageLoad}
      />
      {isImageLoaded && isAnimated && (
        <>
          <h1>{textServices.header}</h1>

          <ul className={css.linksWrap}>
            {textServices.links.map((element) => (
              <li key={element.name}>
                <Link href={element.link} className={css.link}>
                  <img src={element.img} alt={element.alt} />
                  {element.name} <FaArrowRightLong />
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <img
        src="services/right-curtain.png"
        className={cx(
          css.illustrationRight,
          isImageLoaded && isAnimated && css.animated,
        )}
        alt="right part of a decorative illustration of a workshop"
        aria-hidden="true"
        onLoad={handleImageLoad}
      />
      {/* <button onClick={() => setIsBetween(!isBetween)} type="button">
        between
      </button> */}
    </main>
  );
}
