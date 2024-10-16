import Link from 'next/link';
import React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import css from './navbar.module.scss';
import LangSwitch from '../lang-switch/lang-switch';

export default function Navbar() {
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
    <nav className={css.container}>
      <Link href="/">
        <img
          src="logo-3d-small.png"
          alt="scien3 logo 3D"
          className={css.logo}
        />
      </Link>
      <Link href="/" className={css.name}>
        Scien3 Cast Creations
      </Link>

      <a className={css.phoneNumber} href="tel:+380689873600">
        +38(068)-987-36-00
      </a>
      <div className={css.linksWrap}>
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
        <LangSwitch />
      </div>
    </nav>
  );
}
