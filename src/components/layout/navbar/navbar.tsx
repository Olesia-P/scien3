import Link from 'next/link';
import React, { useState } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
// import { IoMenu } from 'react-icons/io5';
import css from './navbar.module.scss';
import LangSwitch from '../lang-switch/lang-switch';
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu';
import useMouseOutsideClose from '@/hooks/useMouseOutsideClose';
// import useClickOutsideClose from '@/components/hooks/useOutsideClickClose';
// import MobileMenu from '../mobile-menu/mobile-menu';

export default function Navbar() {
  const navlinks = [
    {
      name: 'про нас',
      link: '/',
    },
    {
      name: 'послуги',
      link: '/services',
      hasDropdown: true,
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

  const servicesDropdownLinks = [
    {
      name: '3D моделювання',
      link: '/services/modeling-3D',
    },
    {
      name: 'Серійне лиття',
      link: '/services/mass-production',
    },
    {
      name: '3D друк',
      link: '/services/printing-3D',
    },
    {
      name: 'Форми для лиття',
      link: '/',
    },
  ];

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const router = useRouter();

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

        <a className={css.phoneNumber} href="tel:+380689873600">
          +38(068)-987-36-00
        </a>

        <ul className={css.navlinksWrap}>
          {navlinks.map((element) => (
            <li key={element.name}>
              {element.hasDropdown ? (
                <div ref={refServicesMenu}>
                  <Link
                    href={element.link}
                    className={cx(
                      css.navlink,
                      router.pathname === element.link && css.selected,
                    )}
                    onMouseEnter={() => setIsServicesMenuOpen(true)}
                    aria-selected={router.pathname === element.link}
                  >
                    {element.name}
                  </Link>
                  {isServicesMenuOpen && (
                    <div
                      className={css.dropdownWrap}
                      onClick={() => setIsServicesMenuOpen(false)}
                    >
                      <DropdownMenu items={servicesDropdownLinks} />
                    </div>
                  )}
                </div>
              ) : (
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
              )}
            </li>
          ))}
        </ul>

        <div className={css.switch}>
          <LangSwitch />
        </div>
        {/* 
        <button
          type="button"
          className={css.hamburger}
          // onClick={handleHamburgerClick}
        >
          <IoMenu />
        </button> */}

        {/* <div className={css.mobileMenuWrap}>
          <MobileMenu />
        </div> */}
      </nav>
    </header>
  );
}
