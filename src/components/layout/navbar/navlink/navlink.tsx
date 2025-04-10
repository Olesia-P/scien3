import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import useMouseOutsideClose from '@/hooks/use-mouse-outside-close';
import { textNavbar } from '@/texts/layout/text-navbar';
import css from './navlink.module.scss';
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu';
import { useLanguage } from '@/hooks/use-language';

type NavlinkProps = {
  navlink: {
    name: string;
    link: string;
    hasDropdown: boolean;
  };
};

export default function Navlink({ navlink }: NavlinkProps) {
  const language = useLanguage();
  const { dropdownLinks } = textNavbar[language];
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  const refServicesMenu = useMouseOutsideClose(
    setIsServicesMenuOpen,
    isServicesMenuOpen,
  );

  const router = useRouter();

  const createNavlinkAttributes = () => {
    const className = cx(
      css.navLink,
      router.pathname === navlink.link && css.selected,
    );
    const ariaCurrent =
      router.pathname === navlink.link ? ('page' as const) : undefined;
    return {
      className,
      'aria-current': ariaCurrent,
      href: navlink.link,
    };
  };

  return (
    <li className={css.linkWrap}>
      {navlink.hasDropdown ? (
        <div ref={refServicesMenu}>
          <Link
            {...createNavlinkAttributes()}
            onMouseEnter={() => setIsServicesMenuOpen(true)}
          >
            {navlink.name}
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
        <Link {...createNavlinkAttributes()}>{navlink.name}</Link>
      )}
    </li>
  );
}
