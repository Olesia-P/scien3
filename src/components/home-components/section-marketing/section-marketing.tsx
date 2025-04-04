import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import css from './section-marketing.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { textSectionMarketing } from '@/texts/home/text-section-marketing';
import ImageMarquee from '@/components/ui/image-marquee/image-marquee';
import { RootState } from '@/store/store';

export default function SectionMarketing() {
  const { language } = useSelector(({ language }: RootState) => language);

  const { statements } = textSectionMarketing[language];

  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };

  const marketingSectionRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0.2,
  );

  const images = statements.map(({ img, alt }) => ({ img, alt }));

  return (
    <section className={css.container} ref={marketingSectionRef}>
      <div className={css.mobileMarquee}>
        <ImageMarquee images={images} />
      </div>

      <ul className={cx(css.statementsList, isObserved && css.animated)}>
        {statements.map((statement) => (
          <li className={css.statementCard} key={statement.question}>
            <img
              src={statement.img}
              alt={statement.alt}
              className={css.statementIllustration}
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
