import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { IoMenu } from 'react-icons/io5';
import css from './navbar.module.scss';
import LangSwitch from '../lang-switch/lang-switch';
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu';
import useMouseOutsideClose from '@/hooks/useMouseOutsideClose';
import { textContactInfo } from '@/utils/texts/text-contact-info';
import { textNavbar } from '@/utils/texts/layout/text-navbar';
import MobileMenu from '../mobile-menu/mobile-menu';
import useMediaQuery from '@/hooks/useMediaQuery';
import useClickOutsideClose from '@/hooks/useOutsideClickClose';

export default function Navbar() {
  const language = 'ua';

  const { navLinks, dropdownLinks } = textNavbar[language];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const router = useRouter();

  const { phone } = textContactInfo[language];

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const refServicesMenu = useMouseOutsideClose(
    setIsServicesMenuOpen,
    isServicesMenuOpen,
  );

  const [refMobileMenu, refHamburger] = useClickOutsideClose<
    HTMLDivElement,
    HTMLButtonElement
  >(setIsMobileMenuOpen, isMobileMenuOpen);

  const isLargeScreen = useMediaQuery(1024);

  useEffect(() => {
    if (isLargeScreen) {
      setIsMobileMenuOpen(false);
    }
  }, [isLargeScreen]);

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
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              {navLink.hasDropdown ? (
                <div ref={refServicesMenu}>
                  <Link
                    href={navLink.link}
                    className={cx(
                      css.navLink,
                      router.pathname === navLink.link && css.selected,
                    )}
                    onMouseEnter={() => setIsServicesMenuOpen(true)}
                    aria-current={
                      router.pathname === navLink.link ? 'page' : undefined
                    }
                  >
                    {navLink.name}
                  </Link>
                  {isServicesMenuOpen && (
                    <div
                      className={css.dropdownWrap}
                      onClick={() => setIsServicesMenuOpen(false)}
                    >
                      <DropdownMenu links={dropdownLinks} />
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  className={cx(
                    css.navLink,
                    router.pathname === navLink.link && css.selected,
                  )}
                  href={navLink.link}
                  aria-current={
                    router.pathname === navLink.link ? 'page' : undefined
                  }
                >
                  {navLink.name}
                </Link>
              )}
            </li>
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
        >
          <IoMenu />
        </button>

        <div
          className={cx(css.mobileMenuWrap, isMobileMenuOpen && css.opened)}
          ref={refMobileMenu}
        >
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
