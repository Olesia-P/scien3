import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from './single-service-layout.module.scss';
import useCopyTextWithPopup from '@/hooks/use-copy-text-with-popup/use-copy-text-with-popup';

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
  button: string;
  contacts: {
    header: string;
    phone: {
      text: string;
      icon: string;
    };

    email: {
      text: string;
      icon: string;
    };
  };
};

export default function SingleServiceLayout({
  children,
  backgroundStyle,
  content,
  button,
  contacts,
}: SingleServiceLayoutProps) {
  const text = {
    popupText: 'Email скопійовано!',
    email: 'some email',
    emailButton: 'some email',
    emailTitle: 'Натисніть щоб скопіювати',
  };

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
    text.email,
    text.popupText,
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
          <h2 className={css.contactsHeader}>{contacts.header}</h2>
          <ul className={css.contactsWrap}>
            <a className={css.singleContact} href="tel:+380689873600">
              {contacts.phone.text}
            </a>
            <button
              type="button"
              className={css.singleContact}
              onClick={handleCopyClick}
              title={text.emailTitle}
            >
              {text.emailButton}
            </button>
          </ul>
        </section>

        <Link href="/services" className={css.otherServicesLink}>
          {button} <FaArrowRightLong /> <FaArrowRightLong />{' '}
          <FaArrowRightLong />
        </Link>
      </article>
    </main>
  );
}
