import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-contacts.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function SectionContacts() {
  const textSectionContacts = {
    mainHeader: 'Пишіть, дзвоніть та замовляйте!',
    mainHeaderCaption:
      'Ми проконсультуємо та допоможемо з підбором матеріалів.',
    description: [
      'Оформлення замовлення може проводитись як від приватної особи, так і від організації.',
      'Є різні форми доставки та оплати замовлень.',
    ],
    speechBubble: {
      caption: 'Ваші ідеї буде втілено!',
      alt: 'спіч бабл',
    },
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

  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };
  const contactsSectionRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0.5,
  );
  return (
    <section className={css.container} ref={contactsSectionRef}>
      <hgroup className={css.contactsHeader}>
        <h3>{textSectionContacts.mainHeader}</h3>
        <p>{textSectionContacts.mainHeaderCaption}</p>{' '}
      </hgroup>

      <div className={css.contentWrap}>
        <img
          src="contacts/discussion.png"
          alt="Two people discussing a business deal"
          aria-hidden="true"
          className={css.illustration}
        />
        <div className={cx(css.bubbleWrap, isObserved && css.isAnimated)}>
          <p>{textSectionContacts.speechBubble.caption}</p>
          <img
            src="contacts/speech-bubble.png"
            alt={textSectionContacts.speechBubble.alt}
            aria-hidden="true"
          />
        </div>

        <article className={css.contactsCard}>
          <div className={css.description}>
            {textSectionContacts.description.map((element) => (
              <p key={element}>{element}</p>
            ))}
          </div>

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

          <div className={css.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3134611455907!2d30.63728290644443!3d50.45694614088012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daac5317ae83%3A0xf5450b4ea3b09a48!2z0LLRg9C70LjRhtGPINCS0ZbQvdGB0YLQvtC90LAg0KfQtdGA0YfQuNC70LvRjywgNDLQkCwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1729060035949!5m2!1suk!2sua"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
          </div>

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
      </div>
    </section>
  );
}
