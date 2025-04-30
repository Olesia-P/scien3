import { useState } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { useLanguage } from '@/hooks/use-language';
import useMouseOutsideClose from '@/hooks/use-mouse-outside-close';
import { textNavbar } from '@/texts/layout/text-navbar';
import css from './navlink.module.scss';

export type NavlinkType = {
  name: string;
  link: string;
  hasDropdown: boolean;
};

export default function useNavlink(navlink: NavlinkType) {
  const language = useLanguage();
  const { dropdownLinks } = textNavbar[language];

  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  const router = useRouter();
  const refServicesMenu = useMouseOutsideClose(
    setIsServicesMenuOpen,
    isServicesMenuOpen,
  );

  const isLinkCurrentPath = () => {
    const slash = navlink.link === '/' ? '/' : '';
    return (
      (slash && router.pathname.slice(7) === '') ||
      (!slash && router.pathname.slice(7).includes(navlink.link))
    );
  };

  const createNavlinkAttributes = () => {
    const className = cx(css.navLink, isLinkCurrentPath() && css.selected);
    const ariaCurrent = isLinkCurrentPath() ? ('page' as const) : undefined;
    return {
      className,
      'aria-current': ariaCurrent,
      href: `/${language}${navlink.link}`,
    };
  };

  const handleServiceMenuClick = () => {
    setIsServicesMenuOpen(false);
  };

  const handleMouseEnter = () => {
    setIsServicesMenuOpen(true);
  };

  return {
    dropdownLinks,
    refServicesMenu,
    navlinkAttributes: createNavlinkAttributes(),
    isServicesMenuOpen,
    handleServiceMenuClick,
    handleMouseEnter,
  };
}
