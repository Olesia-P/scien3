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
      <picture>
        <source
          media="(min-width: 1600px)"
          srcSet="
            /services/left_curtain_776.webp 776w, 
            /services/left_curtain_776.jpeg 776w"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="
            /services/left_curtain_582.webp 582w, 
            /services/left_curtain_582.jpeg 582w"
        />

        <img
          src="/services/left_curtain_776.jpeg"
          alt={leftPictureAlt}
          className={cx(css.illustrationLeft, isObserved && css.animated)}
          aria-hidden="true"
        />
      </picture>

      <div className={css.content}>
        <h1 className={cx(isObserved && css.animated)}>{header}</h1>

        <ul className={css.linksWrap}>
          {services.map((service) => (
            <li key={service.name} className={cx(isObserved && css.animated)}>
              <Link href={service.link} className={css.link}>
                <img
                  srcSet={`${service.webp}`}
                  src={service.img}
                  alt={service.alt}
                />
                {service.name} <FaArrowRightLong />
              </Link>
            </li>
          ))}
        </ul>

        <div className={css.adding}> </div>
      </div>
      <picture>
        <source
          media="(min-width: 1600px)"
          srcSet="
            /services/right_curtain_1016.webp 1016w, 
            /services/right_curtain_1016.jpeg 1016w"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="
            /services/right_curtain_762.webp 762w, 
            /services/right_curtain_762.jpeg 762w"
        />

        <img
          src="/services/right_curtain_1016.jpeg"
          alt={rightPictureAlt}
          className={cx(css.illustrationRight, isObserved && css.animated)}
          aria-hidden="true"
        />
      </picture>
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
