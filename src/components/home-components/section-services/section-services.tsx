import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from './section-services.module.scss';
import { textSectionServices } from '@/utils/texts/home/text-section-services';
import ServicesDescription from './services-description/services-description';

export default function SectionServices() {
  const language = 'ua';
  const { services } = textSectionServices[language];

  return (
    <section className={css.container}>
      <ServicesDescription />

      <div className={css.cardBorder}>
        <nav className={css.servicesNavigation}>
          {services.map((service) => (
            <Link href={service.link} className={css.link} key={service.name}>
              <img src={service.img} alt={service.alt} />
              <h3 className={css.caption}>
                {service.name} <FaArrowRightLong />
              </h3>
            </Link>
          ))}
          <div className={css.horizontalSeparator} />
          <div className={css.verticalSeparator} />
        </nav>
      </div>
    </section>
  );
}
