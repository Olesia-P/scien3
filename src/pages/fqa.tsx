import React, { useState } from 'react';
import cx from 'classnames';
import css from '../styles/page-styles/fqa.module.scss';
import CollapsableBlock from '@/components/ui/collapsable-block/collapsable-block';
import { textFqa } from '@/utils/texts/text-fqa';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function Fqa() {
  const language = 'ua';

  const { mainHeader, questionCards } = textFqa[language];

  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };
  const fqaRef = useIntersectionObserver(handleIntersection, undefined, 0);

  return (
    <main className={css.container} ref={fqaRef}>
      <div className={css.outline}>
        <div className={css.mainWrap}>
          <h1 className={css.mainHeader}>
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
