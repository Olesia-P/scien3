import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from './single-service-layout.module.scss';
import useCopyTextWithPopup from '@/hooks/use-copy-text-with-popup/use-copy-text-with-popup';
import { textContactInfo } from '@/utils/texts/text-contact-info';
import { textSingleServiceWrapper } from '@/utils/texts/services/text-single-service-wrapper';
import useMediaQuery from '@/hooks/useMediaQuery';

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
  const { otherServicesLinkTitle, contactsHeader } =
    textSingleServiceWrapper[language];

  const decideBackgroundStyle = () => {
    switch (backgroundStyle) {
      case 1:
        return css.style1;
      case 2:
        return css.style2;
      case 3:
        return css.style3;
      case 4:
        return css.style4;
      default:
        return css.style1;
    }
  };

  const { handleCopyClick, Popup } = useCopyTextWithPopup(
    email.text,
    email.onCopyPopupText,
  );

  const isLargeScreen = useMediaQuery(1024);

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

        <section className={css.contactsCard}>
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

            <button
              type="button"
              className={css.emailBtn}
              onClick={handleCopyClick}
              title={clickToCopyMessage}
            >
              {email.text}
            </button>
          </ul>
        </section>

        <Link href="/services" className={css.otherServicesLink}>
          {otherServicesLinkTitle} <FaArrowRightLong /> <FaArrowRightLong />
          <FaArrowRightLong />
        </Link>
      </article>
    </main>
  );
}
