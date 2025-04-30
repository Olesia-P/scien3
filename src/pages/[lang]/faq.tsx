import React, { useState } from 'react';
import { GetStaticPropsContext } from 'next';
import cx from 'classnames';
import css from '@/styles/page-styles/faq.module.scss';
import CollapsableBlock from '@/components/ui/collapsable-block/collapsable-block';
import { textFaq } from '@/texts/text-faq';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { Language, useLanguage } from '@/hooks/use-language';
import { textSeoFaq } from '@/texts/seo/text-seo-faq';
import PageHead, {
  SeoData,
} from '@/components/seo-components/page-head/page-head';

type FaqProps = {
  initialSeo: SeoData;
};

export default function Faq({ initialSeo }: FaqProps) {
  const language = useLanguage();
  const { mainHeader, questionCards } = textFaq[language];

  const [isObserved, setIsObserved] = useState(false);

  const handleIntersection = () => {
    setIsObserved(true);
  };
  const faqRef = useIntersectionObserver(handleIntersection, undefined, 0);

  return (
    <>
      {' '}
      <PageHead initialSeo={initialSeo} seoText={textSeoFaq} />
      <main className={css.container} ref={faqRef}>
        <div className={css.outline}>
          <div className={css.contentWrap}>
            <h1 className={cx(isObserved && css.animated)}>
              <span aria-hidden="true">|</span>
              {mainHeader}
              <span aria-hidden="true">|</span>
            </h1>

            <div className={cx(css.cardsGroup, isObserved && css.animated)}>
              {questionCards.map((card) => (
                <div className={css.card} key={card.question}>
                  <CollapsableBlock
                    header={card.question}
                    text={card.text}
                    headerSize={2}
                  />
                </div>
              ))}
            </div>
          </div>
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
  const { title, description, link } = textSeoFaq[lang];
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
