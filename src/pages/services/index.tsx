import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import cx from 'classnames';
import css from '../../styles/page-styles/services.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { textServicesPage } from '@/utils/texts/services/text-services-page';

export default function Services() {
  const language = 'ua';
  const { header, services, leftPictureAlt, rightPictureAlt } =
    textServicesPage[language];

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const ref = useIntersectionObserver(() => setIsAnimated(true), undefined, 0);

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
        alt={leftPictureAlt}
        aria-hidden="true"
        onLoad={handleImageLoad}
      />

      <div className={css.content}>
        <h1>{header}</h1>

        <ul className={css.linksWrap}>
          {services.map((service) => (
            <li key={service.name}>
              <Link href={service.link} className={css.link}>
                <img src={service.img} alt={service.alt} />
                {service.name} <FaArrowRightLong />
              </Link>
            </li>
          ))}
        </ul>

        <div className={css.adding}> </div>
      </div>

      <img
        src="services/right-curtain.png"
        className={cx(
          css.illustrationRight,
          isImageLoaded && isAnimated && css.animated,
        )}
        alt={rightPictureAlt}
        aria-hidden="true"
        onLoad={handleImageLoad}
      />
    </main>
  );
}
