import React from 'react';
import cx from 'classnames';
import css from './single-contact.module.scss';

type SingleContactProps =
  | {
      title: string;
      text: string;
      isBlue?: boolean;
      isLink: true;
      link: string;
    }
  | {
      title: string;
      text: string;
      isBlue?: boolean;
      isLink: false;
      link?: string;
    };

export default function SingleContact({
  title,
  text,
  isLink,
  link,
  isBlue,
}: SingleContactProps) {
  const renderLink = (children: React.ReactNode) => {
    return (
      <a href={link} className={css.link}>
        {children}
      </a>
    );
  };
  const renderInfo = () => {
    return (
      <span>
        <strong className={css.contactTitle}>{title}</strong>
        <span className={cx((isLink || isBlue) && css.blueUnderlined)}>
          {text}
        </span>
      </span>
    );
  };

  return (
    <>
      {isLink && renderLink(renderInfo())}
      {!isLink && renderInfo()}
    </>
  );
}
