import Link from 'next/link';
import React, { useState } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { IoMenu } from 'react-icons/io5';
import css from './navbar.module.scss';
import LangSwitch from '../lang-switch/lang-switch';
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu';
import useMouseOutsideClose from '@/hooks/useMouseOutsideClose';
import { textContactInfo } from '@/utils/texts/text-contact-info';
import { textNavbar } from '@/utils/texts/layout/text-navbar';
// import useClickOutsideClose from '@/components/hooks/useOutsideClickClose';
// import MobileMenu from '../mobile-menu/mobile-menu';

export default function Navbar() {
  const language = 'ua';

  const { navLinks, dropdownLinks } = textNavbar[language];

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const router = useRouter();

  const { phone } = textContactInfo[language];

  // const handleServicesButtonClick = () => {
  //   setIsServicesMenuOpen((prevState) => !prevState);
  // };
  // const handleHamburgerClick = () => {
  //   setIsMobileMenuOpen((prevState) => !prevState);
  // };

  // useEffect(() => {
  //   if (router.asPath === '/#services-description') {
  //     // Scroll to the section when this path is matched
  //     const section = document.getElementById('services-description');
  //     if (section) {
  //       section.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, [router.asPath]);
  // const refServicesMenu = useClickOutsideClose(
  //   setIsServicesMenuOpen,
  //   isServicesMenuOpen,
  // );

  const refServicesMenu = useMouseOutsideClose(
    setIsServicesMenuOpen,
    isServicesMenuOpen,
  );

  return (
    <header className={css.shadowWrapper}>
      <nav className={css.container}>
        <Link href="/" className={css.logo}>
          <img src="/logo-3d-small.png" alt="scien3 logo 3D" />
          <p>Scien3 Cast Creations</p>
        </Link>

        <p className={css.phoneNumber}>{phone.text}</p>

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
          <LangSwitch />
        </div>

        <button
          type="button"
          className={css.hamburger}
          // onClick={handleHamburgerClick}
        >
          <IoMenu />
        </button>

        {/* <div className={css.mobileMenuWrap}>
          <MobileMenu />
        </div> */}
      </nav>
    </header>
  );
}

//  href={`tel:${phoneN}`}
