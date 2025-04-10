import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { FaArrowRightLong } from 'react-icons/fa6';
import css from './single-service-layout.module.scss';
import { textContactInfo } from '@/texts/text-contact-info';
import { textSingleServiceWrapper } from '@/texts/services/text-single-service-wrapper';
import useMediaQuery from '@/hooks/use-media-query';
import useCopyAndToast from '@/hooks/use-copy-and-toast';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { useLanguage } from '@/hooks/use-language';

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
  const language = useLanguage();

  const { email, phone, clickToCopyBtnTitle } = textContactInfo[language];
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

  const copyText = useCopyAndToast();

  const isLargeScreen = useMediaQuery(1024);

  const [isObserved, setIsObserved] = useState(false);
  const singleServiceRef = useIntersectionObserver(
    () => setIsObserved(true),
    undefined,
    0,
  );
  const [isContactsCardObserved, setIsContatsCardObserved] = useState(false);
  const contactsCardRef = useIntersectionObserver(
    () => setIsContatsCardObserved(true),
    undefined,
    0,
  );

  return (
    <main
      className={cx(css.container, decideBackgroundStyle())}
      ref={singleServiceRef}
    >
      <article className={css.mainContent}>
        <h1 className={cx(css.mainHeader, isObserved && css.animated)}>
          {content.main.header}
        </h1>
        <img
          src={content.img.link}
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

            <button
              type="button"
              className={css.emailBtn}
              onClick={() => copyText(email.text, email.toastMessageCopied)}
              title={clickToCopyBtnTitle}
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
