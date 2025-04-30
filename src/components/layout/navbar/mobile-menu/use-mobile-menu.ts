import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/hooks/use-language';
import { textNavbar } from '@/texts/layout/text-navbar';

export default function useMobileMenu() {
  const language = useLanguage();
  const { navlinks, dropdownLinks } = textNavbar[language];

  const [isServicesBlockOpen, setIsServicesBlockOpen] = useState(false);

  const router = useRouter();

  const handleServicesClick = (link: string) => {
    if (!isServicesBlockOpen) {
      setIsServicesBlockOpen(true);
    }
    if (isServicesBlockOpen) {
      router.push(link);
      setIsServicesBlockOpen(false);
    }
  };

  useEffect(() => {
    setIsServicesBlockOpen(false);
  }, [router.pathname]);

  return {
    navlinks,
    dropdownLinks,
    handleServicesClick,
    isServicesBlockOpen,
    language,
  };
}
