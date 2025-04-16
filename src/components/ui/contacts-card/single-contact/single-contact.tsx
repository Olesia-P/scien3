import React from 'react';
import cx from 'classnames';
import css from './single-contact.module.scss';
import { cssIconUrlVariable } from '@/utils/functions';

type BaseContactProps = {
  title: string;
  text: string;
  isBlue?: boolean;
  icon: string;
};

type SingleContactProps =
  | (BaseContactProps & { isLink: true; link: string })
  | (BaseContactProps & { isLink: false; link?: string });

export default function SingleContact({
  title,
  text,
  isLink,
  link,
  isBlue,
  icon,
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
    <span className={css.container} style={cssIconUrlVariable(icon)}>
      {isLink && renderLink(renderInfo())}
      {!isLink && renderInfo()}
    </span>
  );
}
