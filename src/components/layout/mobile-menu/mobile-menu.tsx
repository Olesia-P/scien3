import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import css from './mobile.menu.module.scss';
import LangSwitch from '../lang-switch/lang-switch';

export default function MobileMenu() {
  const navlinks = [
    {
      name: 'про нас',
      link: '/',
    },
    {
      name: 'послуги',
      link: '/services',
    },
    {
      name: 'роботи',
      link: '/works',
    },
    {
      name: 'FQA',
      link: '/fqa',
    },
    {
      name: 'контакти',
      link: '/contacts',
    },
  ];

  const router = useRouter();
  return (
    <div className={css.container}>
      {navlinks.map((element) => (
        <Link
          className={cx(
            css.navlink,
            router.pathname === element.link && css.selected,
          )}
          href={element.link}
          key={element.name}
        >
          {element.name}
        </Link>
      ))}
      <div className={css.switch}>
        <LangSwitch />
      </div>
    </div>
  );
}
