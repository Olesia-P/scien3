import React, { useState } from 'react';
import cx from 'classnames';
import css from '../styles/page-styles/contacts.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function Contacts() {
  const textSectionContacts = {
    mainHeader: 'Контакти',
    description: [
      'Оформлення замовлення може проводитись як від приватної особи, так і від організації.',
      'Є різні форми доставки та оплати замовлень.',
    ],

    illustrationAlt: 'Людина майструє макет будинку з пластика у майстерні',

    phone: {
      title: 'Телефон:',
      text: '+38(068)-987-36-00',
      icon: '/icons/phone-icon.png',
    },
    otherContacts: [
      {
        title: 'Email:',
        text: ' ',
        icon: '/icons/email-icon.png',
      },
      {
        title: 'Робочі години:',
        text: 'Пн-Пт 9:00-18:00',
        icon: '/icons/timetable-icon.png',
      },
      {
        title: 'Наш офіс:',
        text: 'Київ, вул. Вінстона Черчилля, 42А, офіс 7',
        icon: '/icons/location-icon.png',
      },
    ],
    socialMediaHeader: 'Ми в соціальних мережах:',
    socialMedia: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/3d_scien3_ua?igsh=dDQ1OWxia29jaXpu',
        icon: 'icons/instagram-icon.svg',
      },
    ],
  };

  const [isAnimated, setIsAnimated] = useState(false);

  const ref = useIntersectionObserver(() => setIsAnimated(true), undefined, 0);

  return (
    <main className={cx(css.container, isAnimated && css.animated)} ref={ref}>
      <img
        src="/contacts/building-model.jpeg"
        className={css.illustration}
        alt={textSectionContacts.illustrationAlt}
      />
      <h1>Контакти</h1>
      <div className={css.description}>
        {textSectionContacts.description.map((element) => (
          <p key={element}>{element}</p>
        ))}
      </div>
      <div className={css.mainWrapper}>
        <article className={css.contactsCard}>
          <ul className={css.contactsList}>
            <a
              className={css.singleContactWrap}
              href="tel:+380689873600"
              style={
                {
                  '--icon-url': `url(${textSectionContacts.phone.icon})`,
                } as React.CSSProperties
              }
            >
              <span>
                <strong className={css.contactTitle}>
                  {textSectionContacts.phone.title}
                </strong>{' '}
                <span className={css.phoneNumber}>
                  {textSectionContacts.phone.text}
                </span>
              </span>
            </a>
            {textSectionContacts.otherContacts.map((element) => (
              <li
                className={css.singleContactWrap}
                key={element.icon}
                style={
                  {
                    '--icon-url': `url(${element.icon})`,
                  } as React.CSSProperties
                }
              >
                <span>
                  <strong className={css.contactTitle}>{element.title}</strong>{' '}
                  {element.text}
                </span>
              </li>
            ))}
          </ul>

          <p className={css.socialMediaHeader}>
            {textSectionContacts.socialMediaHeader}
          </p>
          <ul className={css.socialMediaList}>
            {textSectionContacts.socialMedia.map((element) => (
              <a
                key={element.name}
                href={element.link}
                className={css.socialMediaLink}
              >
                <img
                  src={element.icon}
                  className={css.instaIcon}
                  aria-hidden="true"
                  alt="instagram icon"
                />
                {element.name}
              </a>
            ))}
          </ul>
        </article>
        <div className={css.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3134611455907!2d30.63728290644443!3d50.45694614088012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daac5317ae83%3A0xf5450b4ea3b09a48!2z0LLRg9C70LjRhtGPINCS0ZbQvdGB0YLQvtC90LAg0KfQtdGA0YfQuNC70LvRjywgNDLQkCwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1729060035949!5m2!1suk!2sua"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          />
        </div>
      </div>
    </main>
  );
}
