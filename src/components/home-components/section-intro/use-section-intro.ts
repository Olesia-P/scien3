import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/hooks/use-language';
import useMediaQuery from '@/hooks/use-media-query';
import { textSectionIntro } from '@/texts/home/text-section-intro';

export default function useSectionIntro() {
  const language = useLanguage();
  const { caption, ourProducts, illustrationLargeAlt, illustrationSmallAlt } =
    textSectionIntro[language];

  const [isAnimated, setIsAnimated] = useState(false);

  const router = useRouter();
  const isLargeScreen = useMediaQuery(1024);

  const chooseAlt = () => {
    return isLargeScreen ? illustrationLargeAlt : illustrationSmallAlt;
  };

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedHome');

    if (!hasVisited) {
      setIsAnimated(true);
      sessionStorage.setItem('hasVisitedHome', 'true');
    }
  }, [router.pathname]);

  return {
    caption,
    isAnimated,
    ourProducts,
    language,
    illustrationAlt: chooseAlt(),
  };
}
