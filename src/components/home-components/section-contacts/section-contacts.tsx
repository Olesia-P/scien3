import React, { useState } from 'react';
import cx from 'classnames';
import css from './section-contacts.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { textConstactsSectionHomePage } from '@/texts/home/text-section-contacts';
import ContactsCard from '@/components/ui/contacts-card/contacts-card';
import { useLanguage } from '@/hooks/use-language';
import useMediaQuery from '@/hooks/use-media-query';

export default function SectionContacts() {
  const language = useLanguage();

  const {
    header,
    headerCaption,
    speechBubble,
    desktopIllustrationAlt,
    laptopIllustrationAlt,
    mobileIllustrationAlt,
  } = textConstactsSectionHomePage[language];

  const [isObserved, setIsObserved] = useState(false);
  const handleIntersection = () => {
    setIsObserved(true);
  };
  const contactsSectionRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0.1,
  );

  const isLargeScreen = useMediaQuery(1600);
  const isLaptopScreen = useMediaQuery(768);
  const chooseAlt = () => {
    if (isLargeScreen) {
      return desktopIllustrationAlt;
    } else if (isLaptopScreen) {
      return laptopIllustrationAlt;
    } else {
      return mobileIllustrationAlt;
    }
  };

  return (
    <section className={css.container} ref={contactsSectionRef}>
      <hgroup className={cx(css.contactsHeader, isObserved && css.animated)}>
        <h3>{header}</h3>
        <p>{headerCaption}</p>{' '}
      </hgroup>

      <div className={css.content}>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="
            /contacts/box_with_stuff_400.webp 400w, 
            /contacts/box_with_stuff_400.png 400w,
            /contacts/box_with_stuff_700.webp 700w, 
            /contacts/box_with_stuff_700.png 700w"
            sizes="60vw"
          />
          <source
            media="(max-width: 1600px)"
            srcSet="
            /contacts/phone_talking.webp,
            /contacts/phone_talking.png"
          />
          <source
            media="(min-width: 1600px)"
            srcSet="
            /contacts/discussion.webp,
            /contacts/discussion.png"
          />
          <img
            src="/contacts/discussion.png"
            alt={chooseAlt()}
            className={cx(css.illustration, isObserved && css.animated)}
            loading="lazy"
          />
        </picture>

        {/* speech bubble img */}
        <div className={cx(css.bubbleWrap, isObserved && css.animated)}>
          <p>{speechBubble}</p>
          <img
            src="contacts/speech_bubble.png"
            alt=""
            role="presentation"
            aria-hidden="true"
          />
        </div>

        <div className={cx(css.contactsCard, isObserved && css.animated)}>
          <ContactsCard option="vertical" />
        </div>
      </div>
    </section>
  );
}
