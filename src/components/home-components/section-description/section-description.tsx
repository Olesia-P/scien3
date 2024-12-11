import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-description.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { textDescriptionSection } from '@/utils/texts/home/text-section-description';

export default function SectionDescription() {
  const language = 'ua';
  const { header, ourBenefitsList } = textDescriptionSection[language];
  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };
  const descriptionSectionRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0.5,
  );

  return (
    <article className={css.container} ref={descriptionSectionRef}>
      <h2 className={css.mainHeader}>
        <span aria-hidden="true">|</span>
        {header}
        <span aria-hidden="true">|</span>
      </h2>
      <ul className={cx(css.descriptionList, isObserved && css.isAnimated)}>
        {ourBenefitsList.map((benefit) => (
          <li
            key={benefit.icon}
            style={
              {
                '--icon-url': `url(${benefit.icon})`,
              } as React.CSSProperties
            }
          >
            <p>{benefit.text}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
