import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import cx from 'classnames';
import css from '@/styles/page-styles/services.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { textServicesPage } from '@/texts/services/text-services-page';
import { useLanguage } from '@/hooks/use-language';

export default function Services() {
  const language = useLanguage();
  const { header, services, leftPictureAlt, rightPictureAlt } =
    textServicesPage[language];

  // const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isObserved, setIsObserved] = useState(false);
  // const handleImageLoad = () => {
  //   setIsImageLoaded(true);
  // };

  const ref = useIntersectionObserver(() => setIsObserved(true), undefined, 0);

  // useEffect(() => {
  //   const allImages = document.querySelectorAll('img');
  //   const areAllImagesLoaded = Array.from(allImages).every(
  //     (img) => img.complete,
  //   );

  //   if (areAllImagesLoaded) {
  //     setIsImageLoaded(true);
  //   }
  // }, []);

  return (
    <main className={css.container} ref={ref}>
      <img
        src="/services/left-curtain.png"
        className={cx(
          css.illustrationLeft,
          // isImageLoaded
          // &&
          isObserved && css.animated,
        )}
        alt={leftPictureAlt}
        aria-hidden="true"
        // onLoad={handleImageLoad}
      />

      <div className={css.content}>
        <h1 className={cx(isObserved && css.animated)}>{header}</h1>

        <ul className={css.linksWrap}>
          {services.map((service) => (
            <li key={service.name} className={cx(isObserved && css.animated)}>
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
        src="/services/right-curtain.png"
        className={cx(
          css.illustrationRight,
          // isImageLoaded &&
          isObserved && css.animated,
        )}
        alt={rightPictureAlt}
        aria-hidden="true"
        // onLoad={handleImageLoad}
      />
    </main>
  );
}

export async function getStaticPaths() {
  const paths = [{ params: { lang: 'ua' } }, { params: { lang: 'en' } }];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
