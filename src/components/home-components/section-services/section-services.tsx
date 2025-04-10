import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-services.module.scss';
import { textSectionServices } from '@/texts/home/text-section-services';
import ServicesDescription from './services-description/services-description';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import CardItem from './card-item/card-item';
import { useLanguage } from '@/hooks/use-language';

export default function SectionServices() {
  const language = useLanguage();
  const { services, header, ourBenefitsList } = textSectionServices[language];
  const [isCardObserved, setIsCardObserved] = useState(false);

  const cardRef = useIntersectionObserver(
    () => setIsCardObserved(true),
    undefined,
    0,
  );

  return (
    <section className={css.container}>
      <ServicesDescription header={header} ourBenefitsList={ourBenefitsList} />

      <div className={css.cardBorder}>
        <nav
          className={cx(css.servicesNavigation, isCardObserved && css.animated)}
          ref={cardRef}
        >
          {services.map((service) => (
            <CardItem
              link={service.link}
              alt={service.alt}
              imgSrc={service.img}
              text={service.name}
              key={service.name}
            />
          ))}
          <div className={css.horizontalSeparator} />
          <div className={css.verticalSeparator} />
        </nav>
      </div>
    </section>
  );
}
