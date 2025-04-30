import React from 'react';
import cx from 'classnames';
import css from './section-services.module.scss';
import ServicesDescription from './services-description/services-description';
import CardItem from './card-item/card-item';
import useSectionServices from './use-section-services';

export default function SectionServices() {
  const { cardRef, services, header, ourBenefitsList, isCardObserved } =
    useSectionServices();

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
              img={service.img}
              webp={service.webp}
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
