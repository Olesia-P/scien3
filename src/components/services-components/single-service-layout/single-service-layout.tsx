import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from './single-service-layout.module.scss';
import useSingleServiceLayout from './use-single-service-layout';

type SingleServiceLayoutProps = {
  children: React.ReactNode;
  backgroundStyle: number;
  content: {
    main: {
      header: string;
      description: string | React.JSX.Element;
    };
    img: {
      img: string;
      webp: string;
      alt: string;
    };
  };
};

export default function SingleServiceLayout({
  children,
  backgroundStyle,
  content,
}: SingleServiceLayoutProps) {
  const {
    language,
    isObserved,
    singleServiceRef,
    isLargeScreen,
    copyText,
    contactsCardRef,
    isContactsCardObserved,
    backgroundStl,
    email,
    phone,
    clickToCopyBtnTitle,
    otherServicesLinkTitle,
    contactsHeader,
  } = useSingleServiceLayout(backgroundStyle);

  return (
    <main className={cx(css.container, backgroundStl)} ref={singleServiceRef}>
      <article className={css.mainContent}>
        <h1 className={cx(css.mainHeader, isObserved && css.animated)}>
          {content.main.header}
        </h1>
        <img
          srcSet={`${content.img.webp}`}
          src={content.img.img}
          alt={content.img.alt}
          className={cx(css.illustration, isObserved && css.animated)}
        />

        <p className={css.description}>{content.main.description}</p>

        {children}

        <section
          className={cx(
            css.contactsCard,
            isContactsCardObserved && css.animated,
          )}
          ref={contactsCardRef}
        >
          <p className={css.contactsHeader}>{contactsHeader}</p>
          <ul className={css.contactsWrap}>
            <li
              className={cx(css.phoneNumber, !isLargeScreen && css.underlined)}
            >
              {isLargeScreen ? (
                <span>{phone.text} </span>
              ) : (
                <a href={`tel:${phone.number}`}>{phone.text}</a>
              )}
            </li>

            <li className={css.emailBtn}>
              <button
                type="button"
                onClick={() => copyText(email.text, email.toastMessageCopied)}
                title={clickToCopyBtnTitle}
              >
                {email.text}
              </button>
            </li>
          </ul>
        </section>

        <Link href={`/${language}/services`} className={css.otherServicesLink}>
          {otherServicesLinkTitle} <FaArrowRightLong /> <FaArrowRightLong />
          <FaArrowRightLong />
        </Link>
      </article>
    </main>
  );
}
