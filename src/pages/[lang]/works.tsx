import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GetStaticPropsContext } from 'next';
import cx from 'classnames';
import css from '@/styles/page-styles/works.module.scss';
import { textWorks } from '@/texts/text-works';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import WorksImgCard from '@/components/works-components/works-img-card/works-img-card';
import { Language, useLanguage } from '@/hooks/use-language';
import { textSeoWorks } from '@/texts/seo/text-seo-works';
import PageHead, {
  SeoData,
} from '@/components/seo-components/page-head/page-head';

type WorksProps = {
  initialSeo: SeoData;
};

export default function Works({ initialSeo }: WorksProps) {
  const language = useLanguage();
  const { alt, images, mainHeader, caption } = textWorks[language];

  const [isObserved, setIsObserved] = useState(false);

  const handleIntersection = () => {
    setIsObserved(true);
  };

  const worksRef = useIntersectionObserver(handleIntersection, undefined, 0);

  return (
    <>
      <PageHead initialSeo={initialSeo} seoText={textSeoWorks} />
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
                <WorksImgCard
                  img={img.img}
                  webp={img.webp}
                  alt={alt}
                  key={img.img}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [{ params: { lang: 'ua' } }, { params: { lang: 'en' } }];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const lang = context.params?.lang as Language;
  const { title, description, link } = textSeoWorks[lang];
  const initialSeo: SeoData = {
    title,
    description,
    link,
  };

  return {
    props: {
      initialSeo,
    },
  };
}
