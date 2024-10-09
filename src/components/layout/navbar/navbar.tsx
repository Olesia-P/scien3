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
      name: 'наші роботи',
      link: '/works',
    },
    {
      name: 'контакти',
      link: '/contacts',
    },
  ];

  const router = useRouter();
  //   const currentPath = router.pathname;

  //   console.log(router.pathname);

  return (
    <nav className={css.container}>
      <Link href="/" className={css.logoWrap}>
        {' '}
        <img
          src="scien3-3D-05.png"
          alt="logo transparent"
          className={css.logo}
        />
        <div className={css.name}>Scien3 Cast Creations</div>
      </Link>

      <div className={css.linksWrap}>
        {navlinks.map((element) => (
          <Link
            className={cx(
              css.navlink,
              router.pathname === element.link && css.selected,
              // : css.hoverable,
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
