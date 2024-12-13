import React from 'react';
import css from '../styles/page-styles/fqa.module.scss';
import CollapsableBlock from '@/components/ui/collapsable-block/collapsable-block';
import { textFqa } from '@/utils/texts/text-fqa';

export default function Fqa() {
  const language = 'ua';

  const { mainHeader, questionCards } = textFqa[language];

  return (
    <main className={css.container}>
      <div className={css.outline}>
        <div className={css.mainWrap}>
          <h1 className={css.mainHeader}>
            <span>|</span>
            {mainHeader}
            <span>|</span>
          </h1>

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
    </main>
  );
}
