import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import css from './mobile.menu.module.scss';
import LangSwitch from '../lang-switch/lang-switch';
import { textNavbar } from '@/utils/texts/layout/text-navbar';

export default function MobileMenu() {
  const language = 'ua';

  const { navLinks } = textNavbar[language];

  const router = useRouter();
  return (
    <div className={css.shadowWrapper}>
      <div className={css.container}>
        {navLinks.map((navLink) => (
          <Link
            className={cx(
              css.navlink,
              router.pathname === navLink.link && css.selected,
            )}
            href={navLink.link}
            key={navLink.name}
            aria-current={router.pathname === navLink.link ? 'page' : undefined}
          >
            {navLink.name}
          </Link>
        ))}
        <div className={css.switch}>
          <LangSwitch fontSize="m" />
        </div>
      </div>
    </div>
  );
}
