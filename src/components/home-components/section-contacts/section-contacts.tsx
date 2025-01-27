import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-contacts.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cssIconUrlVariable } from '@/utils/functions';
import { textContactInfo } from '@/utils/texts/text-contact-info';
import { textConstactsSectionHomePage } from '@/utils/texts/home/text-contacts-section';
import useCopyTextWithPopup from '@/hooks/use-copy-text-with-popup/use-copy-text-with-popup';

export default function SectionContacts() {
  const language = 'ua';
  const {
    phone,
    email,
    workingHours,
    location,
    socialMedia,
    clickToCopyMessage,
  } = textContactInfo[language];

  const {
    mainHeader,
    mainHeaderCaption,
    description,
    speechBubble,
    desktopIllustrationAlt,
    tabletIllustrationAlt,
    mobileIllustrationAlt,
  } = textConstactsSectionHomePage[language];

  const contactsList = [phone, location, workingHours];

  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };
  const contactsSectionRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0.5,
  );

  const { handleCopyClick, Popup } = useCopyTextWithPopup(
    email.text,
    email.onCopyPopupText,
  );

  return (
    <section className={css.container} ref={contactsSectionRef}>
      <Popup />
      <hgroup className={css.contactsHeader}>
        <h3>{mainHeader}</h3>
        <p>{mainHeaderCaption}</p>{' '}
      </hgroup>

      <div className={css.contentWrap}>
        <img
          src="contacts/discussion.png"
          alt={desktopIllustrationAlt}
          aria-hidden="true"
          className={css.desktopIllustration}
        />
        <img
          src="contacts/phone-talking.png"
          alt={tabletIllustrationAlt}
          aria-hidden="true"
          className={css.tabletIllustration}
        />
        <img
          src="contacts/box-with-stuff.png"
          alt={mobileIllustrationAlt}
          aria-hidden="true"
          className={css.mobileIllustration}
        />
        <div className={cx(css.bubbleWrap, isObserved && css.isAnimated)}>
          <p>{speechBubble.caption}</p>
          <img
            src="contacts/speech-bubble.png"
            alt={speechBubble.alt}
            aria-hidden="true"
          />
        </div>

        <article className={css.contactsCard}>
          <div className={css.description}>
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className={css.contactsList}>
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

          <div className={css.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3134611455907!2d30.63728290644443!3d50.45694614088012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daac5317ae83%3A0xf5450b4ea3b09a48!2z0LLRg9C70LjRhtGPINCS0ZbQvdGB0YLQvtC90LAg0KfQtdGA0YfQuNC70LvRjywgNDLQkCwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1729060035949!5m2!1suk!2sua"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
          </div>

          <p className={css.socialMediaHeader}>{socialMedia.header}</p>
          <ul className={css.socialMediaList}>
            {socialMedia.list.map((mediaItem) => (
              <a
                key={mediaItem.name}
                href={mediaItem.link}
                className={css.socialMediaLink}
              >
                <img
                  src={mediaItem.icon}
                  className={css.mediaIcon}
                  aria-hidden="true"
                  alt={mediaItem.alt}
                />
                {mediaItem.name}
              </a>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
