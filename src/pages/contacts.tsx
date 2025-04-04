import React, { useState } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import css from '../styles/page-styles/contacts.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { textContactsPage } from '@/utils/texts/text-contacts-page';
import ContactsCard from '@/components/ui/contacts-card/contacts-card';
import useMediaQuery from '@/hooks/use-media-query';
import { RootState } from '@/store/store';

export default function Contacts() {
  const { language } = useSelector(({ language }: RootState) => language);

  const { mainHeader, illustrationAlt } = textContactsPage[language];
  const [isObserved, setIsObserved] = useState(false);
  const contactsPageRef = useIntersectionObserver(
    () => setIsObserved(true),
    undefined,
    0,
  );
  const isLargeScreen = useMediaQuery(1024);

  return (
    <main className={css.container} ref={contactsPageRef}>
      {isLargeScreen ? (
        <img
          src="/contacts/building-model.jpeg"
          className={cx(css.illustration, isObserved && css.animated)}
          alt={illustrationAlt}
        />
      ) : (
        <img
          src="/contacts/building-model-mobile.jpeg"
          className={cx(css.illustration, isObserved && css.animated)}
          alt={illustrationAlt}
        />
      )}

      <h1>
        <span aria-hidden="true">|</span>
        {mainHeader}
        <span aria-hidden="true">|</span>
      </h1>

      <div className={cx(css.contactsCard, isObserved && css.animated)}>
        <ContactsCard option={isLargeScreen ? 'horizontal' : 'vertical'} />
      </div>
    </main>
  );
}
