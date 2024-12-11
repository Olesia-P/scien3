import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from './single-service-layout.module.scss';
import useCopyTextWithPopup from '@/hooks/use-copy-text-with-popup/use-copy-text-with-popup';
import { textContactInfo } from '@/utils/texts/text-contact-info';
import { textSingleServiceWrapper } from '@/utils/texts/services/text-single-service-wrapper';

type SingleServiceLayoutProps = {
  children: React.ReactNode;
  backgroundStyle: number;
  content: {
    main: {
      header: string;
      description: string | React.JSX.Element;
    };
    img: {
      link: string;
      alt: string;
    };
  };
};

export default function SingleServiceLayout({
  children,
  backgroundStyle,
  content,
}: SingleServiceLayoutProps) {
  const language = 'ua';
  const { email, phone, clickToCopyMessage } = textContactInfo[language];
  const { otherServicesTitle, mainHeader } = textSingleServiceWrapper[language];

  const decideBackgroundStyle = () => {
    switch (backgroundStyle) {
      case 1:
        return css.style1;
      case 2:
        return css.style2;
      case 3:
        return css.style3;
      case 4:
        return css.style3;
      default:
        return css.style1;
    }
  };

  const { handleCopyClick, Popup } = useCopyTextWithPopup(
    email.text,
    email.onCopyPopupText,
  );

  return (
    <main className={cx(css.container, decideBackgroundStyle())}>
      <Popup />
      <article className={css.mainContent}>
        <h1 className={css.mainHeader}>{content.main.header}</h1>
        <img
          src={content.img.link}
          alt={content.img.alt}
          className={css.illustration}
        />

        <p className={css.description}>{content.main.description}</p>

        {children}

        <section className={css.contacts}>
          <h2 className={css.contactsHeader}>{mainHeader}</h2>
          <ul className={css.contactsWrap}>
            <li className={css.singleContact}>{phone.text}</li>
            <button
              type="button"
              className={css.singleContact}
              onClick={handleCopyClick}
              title={clickToCopyMessage}
            >
              {email.text}
            </button>
          </ul>
        </section>

        <Link href="/services" className={css.otherServicesLink}>
          {otherServicesTitle} <FaArrowRightLong /> <FaArrowRightLong />{' '}
          <FaArrowRightLong />
        </Link>
      </article>
    </main>
  );
}
