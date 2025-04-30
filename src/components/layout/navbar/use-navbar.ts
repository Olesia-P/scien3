import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/hooks/use-language';
import useMediaQuery from '@/hooks/use-media-query';
import useClickOutsideClose from '@/hooks/use-outside-click-close';
import { textNavbar } from '@/texts/layout/text-navbar';
import { textContactInfo } from '@/texts/text-contact-info';

export default function useNavbar() {
  const language = useLanguage();
  const { navlinks } = textNavbar[language];
  const { phone } = textContactInfo[language];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const router = useRouter();
  const isLargeScreen = useMediaQuery(1024);
  const [refMobileMenu, refHamburger] = useClickOutsideClose<
    HTMLDivElement,
    HTMLButtonElement
  >(setIsMobileMenuOpen, isMobileMenuOpen);

  const handleHamburgerClick = () => {
    setIsAnimated((prevState) => !prevState);
  };

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

  return {
    navlinks,
    phone,
    isLargeScreen,
    refMobileMenu,
    refHamburger,
    handleHamburgerClick,
    isMobileMenuOpen,
    isAnimated,
  };
}
