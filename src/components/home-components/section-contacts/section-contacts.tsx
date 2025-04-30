import React from 'react';
import cx from 'classnames';
import css from './section-contacts.module.scss';
import useSectionContacts from './use-section-contacts';
import ContactsCard from '../../ui/contacts-card/contacts-card';

export default function SectionContacts() {
  const {
    contactsSectionRef,
    isObserved,
    header,
    headerCaption,
    illustrationAlt,
    speechBubble,
  } = useSectionContacts();

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
            alt={illustrationAlt}
            className={cx(css.illustration, isObserved && css.animated)}
            loading="lazy"
          />
        </picture>

        <div className={cx(css.bubbleWrap, isObserved && css.animated)}>
          <p>{speechBubble}</p>
          <img
            src="contacts/speech_bubble.png"
            alt=""
            role="presentation"
            aria-hidden="true"
            loading="lazy"
          />
        </div>

        <div className={cx(css.contactsCard, isObserved && css.animated)}>
          <ContactsCard option="vertical" />
        </div>
      </div>
    </section>
  );
}
