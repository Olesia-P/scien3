import React from 'react';
import css from './social-media.module.scss';

type SocialMediaProps = {
  header: string;
  list: {
    name: string;
    link: string;
    icon: string;
    alt: string;
  }[];
};

export default function SocialMedia({ header, list }: SocialMediaProps) {
  return (
    <>
      {' '}
      <p className={css.socialMediaHeader}>{header}</p>
      <ul className={css.socialMediaList}>
        {list.map((mediaItem) => (
          <li key={mediaItem.name}>
            <a href={mediaItem.link} className={css.socialMediaLink}>
              <img
                src={mediaItem.icon}
                className={css.mediaIcon}
                aria-hidden="true"
                alt={mediaItem.alt}
                loading="lazy"
              />
              {mediaItem.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
