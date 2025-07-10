import Link from 'next/link';
import React from 'react';
import cx from 'classnames';
import { IoMenu } from 'react-icons/io5';
import css from './navbar.module.scss';
import LangSwitch from './lang-switch/lang-switch';
import MobileMenu from './mobile-menu/mobile-menu';
import Navlink from './navlink/navlink';
import useNavbar from './use-navbar';

export default function Navbar() {
  const {
    navlinks,
    phone,
    isLargeScreen,
    refMobileMenu,
    refHamburger,
    handleHamburgerClick,
    isMobileMenuOpen,
    isAnimated,
  } = useNavbar();

  return (
    <header className={css.shadowWrapper}>
      <nav className={css.container}>
        <Link href="/" className={css.logo}>
          <img src="/logo_3d_small.png" alt="" />
          <p>Scien3 Cast Creations</p>
        </Link>

        {isLargeScreen ? (
          <p className={css.phoneNumber}>{phone.text}</p>
        ) : (
          <a className={css.phoneNumber} href={`tel:${phone.number}`}>
            {phone.text}
          </a>
        )}

        <ul className={css.navLinksWrap}>
          {navlinks.map((navlink) => (
            <Navlink navlink={navlink} key={navlink.name} />
          ))}
        </ul>

        <div className={css.switch}>
          <LangSwitch fontSize="s" />
        </div>

        <button
          type="button"
          className={css.hamburger}
          onClick={handleHamburgerClick}
          ref={refHamburger}
          aria-label="Toggle  mobile menu"
        >
          <IoMenu />
        </button>

        {isMobileMenuOpen && (
          <div
            className={cx(css.mobileMenuWrap, isAnimated && css.opened)}
            ref={refMobileMenu}
          >
            <MobileMenu />
          </div>
        )}
      </nav>
    </header>
  );
}
