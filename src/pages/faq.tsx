import React, { useState } from 'react';
import cx from 'classnames';
import css from '../styles/page-styles/faq.module.scss';
import CollapsableBlock from '@/components/ui/collapsable-block/collapsable-block';
import { textFaq } from '@/utils/texts/text-faq';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function Faq() {
  const language = 'ua';

  const { mainHeader, questionCards } = textFaq[language];

  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };
  const faqRef = useIntersectionObserver(handleIntersection, undefined, 0);

  return (
    <main className={css.container} ref={faqRef}>
      <div className={css.outline}>
        <div className={css.contentWrap}>
          <h1>
            <span>|</span>
            {mainHeader}
            <span>|</span>
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
  );
}
