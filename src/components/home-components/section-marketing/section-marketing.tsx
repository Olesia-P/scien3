import React from 'react';
import cx from 'classnames';
import css from './section-marketing.module.scss';
import ImageMarquee from '@/components/ui/image-marquee/image-marquee';
import useSectionMarketing from './use-section-marketing';

export default function SectionMarketing() {
  const { marketingSectionRef, isObserved, statements, images } =
    useSectionMarketing();

  return (
    <section className={css.container} ref={marketingSectionRef}>
      <div className={css.mobileMarquee}>
        <ImageMarquee images={images} />
      </div>

      <ul className={cx(css.statementsList, isObserved && css.animated)}>
        {statements.map((statement) => (
          <li className={css.statementCard} key={statement.question}>
            <img
              srcSet={statement.webp}
              src={statement.img}
              alt={statement.alt}
              className={css.statementIllustration}
              loading="lazy"
            />
            <article>
              <h3 className={css.question}>&#128269; {statement.question}</h3>
              <p className={css.answer}>{statement.answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
