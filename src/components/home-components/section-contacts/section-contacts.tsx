import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-contacts.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cssIconUrlVariable } from '@/utils/functions';
import { textContactInfo } from '@/utils/texts/text-contact-info';
import { textConstactsSectionHomePage } from '@/utils/texts/home/text-section-contacts';
import useCopyTextWithPopup from '@/hooks/use-copy-text-with-popup/use-copy-text-with-popup';
import useMediaQuery from '@/hooks/useMediaQuery';
import SingleContact from './single-contact/single-contact';
import SocialMedia from './social-media/social-media';

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
    header,
    headerCaption,
    description,
    speechBubble,
    desktopIllustrationAlt,
    tabletIllustrationAlt,
    mobileIllustrationAlt,
  } = textConstactsSectionHomePage[language];

  const contactsList = [location, workingHours];

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

  const isLargeScreen = useMediaQuery(1024);

  const imgs = [
    {
      src: 'contacts/discussion.png',
      alt: desktopIllustrationAlt,
      classname: css.desktopIllustration,
    },
    {
      src: 'contacts/phone-talking.png',
      alt: tabletIllustrationAlt,
      classname: css.tabletIllustration,
    },
    {
      src: 'contacts/box-with-stuff.png',
      alt: mobileIllustrationAlt,
      classname: css.mobileIllustration,
    },
  ];

  return (
    <section className={css.container} ref={contactsSectionRef}>
      <Popup />
      <hgroup className={css.contactsHeader}>
        <h3>{header}</h3>
        <p>{headerCaption}</p>{' '}
      </hgroup>

      <div className={css.content}>
        {/* illustration */}
        {imgs.map((img) => (
          <img
            src={img.src}
            alt={img.alt}
            aria-hidden="true"
            className={img.classname}
            key={img.src}
          />
        ))}

        {/* speech bubble img */}
        <div className={cx(css.bubbleWrap, isObserved && css.isAnimated)}>
          <p>{speechBubble.caption}</p>
          <img
            src="contacts/speech-bubble.png"
            alt={speechBubble.alt}
            aria-hidden="true"
          />
        </div>

        {/* card */}
        <article className={css.contactsCard}>
          <div className={css.description}>
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className={css.contactsList}>
            {/* email */}
            <li
              className={css.singleContactWrap}
              style={cssIconUrlVariable(email.icon)}
              onClick={handleCopyClick}
              title={clickToCopyMessage}
            >
              <SingleContact
                title={email.title}
                text={email.text}
                isLink={false}
                isBlue
              />
            </li>

            {/* phone */}
            <li
              className={css.singleContactWrap}
              style={cssIconUrlVariable(phone.icon)}
            >
              <SingleContact
                title={phone.title}
                text={phone.text}
                isLink={!isLargeScreen}
                link={`tel:${phone.number}`}
              />
            </li>

            {/* rest of the contacts */}
            {contactsList.map((contact) => (
              <li
                className={css.singleContactWrap}
                key={contact.icon}
                style={cssIconUrlVariable(contact.icon)}
              >
                <SingleContact
                  title={contact.title}
                  text={contact.text}
                  isLink={false}
                />
              </li>
            ))}
          </ul>

          {/* google map */}
          <div className={css.googleMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3134611455907!2d30.63728290644443!3d50.45694614088012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daac5317ae83%3A0xf5450b4ea3b09a48!2z0LLRg9C70LjRhtGPINCS0ZbQvdGB0YLQvtC90LAg0KfQtdGA0YfQuNC70LvRjywgNDLQkCwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1729060035949!5m2!1suk!2sua"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
          </div>

          <SocialMedia header={socialMedia.header} list={socialMedia.list} />
        </article>
      </div>
    </section>
  );
}
