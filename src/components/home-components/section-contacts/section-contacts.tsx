import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-contacts.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { textConstactsSectionHomePage } from '@/utils/texts/home/text-section-contacts';
import ContactsCard from '@/components/ui/contacts-card/contacts-card';

export default function SectionContacts() {
  const language = 'ua';

  const {
    header,
    headerCaption,
    speechBubble,
    desktopIllustrationAlt,
    tabletIllustrationAlt,
    mobileIllustrationAlt,
  } = textConstactsSectionHomePage[language];

  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };
  const contactsSectionRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0.5,
  );

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

        <div className={css.contactsCard}>
          <ContactsCard option="vertical" />
        </div>
      </div>
    </section>
  );
}
