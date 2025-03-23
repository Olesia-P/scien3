import React, { useState } from 'react';
import cx from 'classnames';
import css from './services-description.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';

type ServicesDescriptionProps = {
  header: string;
  ourBenefitsList: {
    text: string;
    icon: string;
  }[];
};

export default function ServicesDescription({
  header,
  ourBenefitsList,
}: ServicesDescriptionProps) {
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
      <h2>
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
