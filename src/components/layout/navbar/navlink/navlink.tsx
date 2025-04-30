import React from 'react';
import Link from 'next/link';
import css from './navlink.module.scss';
import DropdownMenu from '@/components/ui/dropdown-menu/dropdown-menu';
import useNavlink, { NavlinkType } from './use-navlink';

type NavlinkProps = {
  navlink: NavlinkType;
};

export default function Navlink({ navlink }: NavlinkProps) {
  const {
    dropdownLinks,
    refServicesMenu,
    navlinkAttributes,
    isServicesMenuOpen,
    handleServiceMenuClick,
    handleMouseEnter,
  } = useNavlink(navlink);

  return (
    <li className={css.linkWrap}>
      {navlink.hasDropdown ? (
        <div ref={refServicesMenu}>
          <Link {...navlinkAttributes} onMouseEnter={handleMouseEnter}>
            {navlink.name}
          </Link>

          {isServicesMenuOpen && (
            <div className={css.dropdownWrap} onClick={handleServiceMenuClick}>
              <DropdownMenu links={dropdownLinks} />
            </div>
          )}
        </div>
      ) : (
        <Link {...navlinkAttributes}>{navlink.name}</Link>
      )}
    </li>
  );
}
