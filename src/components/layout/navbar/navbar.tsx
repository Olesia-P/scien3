import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { IoMenu } from 'react-icons/io5';
// import { useSelector } from 'react-redux';
import css from './navbar.module.scss';
import LangSwitch from './lang-switch/lang-switch';
import { textContactInfo } from '@/texts/text-contact-info';
import { textNavbar } from '@/texts/layout/text-navbar';
import MobileMenu from './mobile-menu/mobile-menu';
import useMediaQuery from '@/hooks/use-media-query';
import useClickOutsideClose from '@/hooks/use-outside-click-close';
import Navlink from './navlink/navlink';
// import { RootState } from '@/store/store';
import { useLanguage } from '@/hooks/use-language';

export default function Navbar() {
  // const { language } = useSelector(({ language }: RootState) => language);
  const language = useLanguage();
  const { navlinks } = textNavbar[language];
  const { phone } = textContactInfo[language];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const router = useRouter();

  const [refMobileMenu, refHamburger] = useClickOutsideClose<
    HTMLDivElement,
    HTMLButtonElement
  >(setIsMobileMenuOpen, isMobileMenuOpen);

  const isLargeScreen = useMediaQuery(1024);

  useEffect(() => {
    if (isLargeScreen) {
      setIsMobileMenuOpen(false);
      setIsAnimated(false);
    }
  }, [isLargeScreen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAnimated(false);
  }, [router.pathname]);

  useEffect(() => {
    if (!isAnimated) {
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 500);
    }
    if (isAnimated) {
      setIsMobileMenuOpen(true);
    }
  }, [isAnimated]);

  return (
    <header className={css.shadowWrapper}>
      <nav className={css.container}>
        <Link href="/" className={css.logo}>
          <img src="/logo-3d-small.png" alt="scien3 logo 3D" />
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
          onClick={() => setIsAnimated((prevState) => !prevState)}
          ref={refHamburger}
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
