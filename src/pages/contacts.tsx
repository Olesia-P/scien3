import React, { useState } from 'react';
import cx from 'classnames';
import css from '../styles/page-styles/contacts.module.scss';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { textContactsPage } from '@/utils/texts/text-contacts-page';
// import useCopyTextWithPopup from '@/hooks/use-copy-text-with-popup/use-copy-text-with-popup';
import ContactsCard from '@/components/ui/contacts-card/contacts-card';
import useMediaQuery from '@/hooks/use-media-query';

export default function Contacts() {
  const language = 'ua';

  const { mainHeader, illustrationAlt } = textContactsPage[language];

  // const contactsList = [phone, workingHours, location];

  const [isAnimated, setIsAnimated] = useState(false);

  const ref = useIntersectionObserver(() => setIsAnimated(true), undefined, 0);

  // const { handleCopyClick, Popup } = useCopyTextWithPopup(
  //   email.text,
  //   email.onCopyPopupText,
  // );

  const isLargeScreen = useMediaQuery(1024);

  return (
    <main className={cx(css.container, isAnimated && css.animated)} ref={ref}>
      {/* <Popup /> */}

      {isLargeScreen ? (
        <img
          src="/contacts/building-model.jpeg"
          className={css.illustration}
          alt={illustrationAlt}
        />
      ) : (
        <img
          src="/contacts/building-model-mobile.jpeg"
          className={css.illustration}
          alt={illustrationAlt}
        />
      )}

      <h1>
        <span aria-hidden="true">|</span>
        {mainHeader}
        <span aria-hidden="true">|</span>
      </h1>

      <div className={css.contactsCard}>
        <ContactsCard option={isLargeScreen ? 'horizontal' : 'vertical'} />
      </div>
    </main>
  );
}
