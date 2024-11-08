import Link from 'next/link';
import React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
// import { IoMenu } from 'react-icons/io5';
import css from './navbar.module.scss';
import LangSwitch from '../lang-switch/lang-switch';
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

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // const handleHamburgerClick = () => {
  //   setIsMobileMenuOpen((prevState) => !prevState);
  // };

  return (
    <header>
      <nav className={css.container}>
        <Link href="/" className={css.logo}>
          <img src="logo-3d-small.png" alt="scien3 logo 3D" />
          <p>Scien3 Cast Creations</p>
        </Link>

        <a className={css.phoneNumber} href="tel:+380689873600">
          +38(068)-987-36-00
        </a>

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
