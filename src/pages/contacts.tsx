import React, { useState } from 'react';
import cx from 'classnames';
import css from '../styles/page-styles/contacts.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cssIconUrlVariable } from '@/utils/functions';
import { textContactInfo } from '@/utils/texts/text-contact-info';
import { textContactsPage } from '@/utils/texts/text-contacts-page';
import useCopyTextWithPopup from '@/hooks/use-copy-text-with-popup/use-copy-text-with-popup';

export default function Contacts() {
  const language = 'ua';

  const {
    email,
    phone,
    workingHours,
    location,
    socialMedia,
    clickToCopyMessage,
  } = textContactInfo[language];

  const { mainHeader, description, illustrationAlt } =
    textContactsPage[language];

  const contactsList = [phone, workingHours, location];

  const [isAnimated, setIsAnimated] = useState(false);

  const ref = useIntersectionObserver(() => setIsAnimated(true), undefined, 0);

  const { handleCopyClick, Popup } = useCopyTextWithPopup(
    email.text,
    email.onCopyPopupText,
  );

  return (
    <main className={cx(css.container, isAnimated && css.animated)} ref={ref}>
      <Popup />
      <div className={css.illustrationOutline}>
        <img
          src="/contacts/building-model.jpeg"
          className={css.illustration}
          alt={illustrationAlt}
        />
      </div>
      <h1>
        <span>|</span>
        {mainHeader}
        <span>|</span>
      </h1>
      <div className={css.description}>
        {description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className={css.card}>
        <article className={css.contacts}>
          <ul>
            <li
              className={css.singleContactWrap}
              style={cssIconUrlVariable(email.icon)}
            >
              <span>
                <strong className={css.contactTitle}>{email.title}</strong>{' '}
                <span
                  className={css.link}
                  onClick={handleCopyClick}
                  title={clickToCopyMessage}
                >
                  {' '}
                  {email.text}
                </span>
              </span>
            </li>
            {contactsList.map((contact) => (
              <li
                className={css.singleContactWrap}
                key={contact.icon}
                style={cssIconUrlVariable(contact.icon)}
              >
                <span>
                  <strong className={css.contactTitle}>{contact.title}</strong>{' '}
                  {contact.text}
                </span>
              </li>
            ))}
          </ul>

          <p className={css.socialMediaHeader}>{socialMedia.header}</p>
          <ul className={css.socialMediaList}>
            {socialMedia.list.map((element) => (
              <a
                key={element.name}
                href={element.link}
                className={css.socialMediaLink}
              >
                <img
                  src={element.icon}
                  className={css.instaIcon}
                  aria-hidden="true"
                  alt={element.alt}
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

// href={"tel:+380689873600"}
