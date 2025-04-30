import { useState } from 'react';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { useLanguage } from '@/hooks/use-language';
import useMediaQuery from '@/hooks/use-media-query';
import { textConstactsSectionHomePage } from '@/texts/home/text-section-contacts';

export default function useSectionContacts() {
  const language = useLanguage();
  const {
    header,
    headerCaption,
    speechBubble,
    desktopIllustrationAlt,
    laptopIllustrationAlt,
    mobileIllustrationAlt,
  } = textConstactsSectionHomePage[language];

  const [isObserved, setIsObserved] = useState(false);

  const handleIntersection = () => {
    setIsObserved(true);
  };
  const contactsSectionRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0.1,
  );

  const isLargeScreen = useMediaQuery(1600);
  const isLaptopScreen = useMediaQuery(768);

  const chooseAlt = () => {
    if (isLargeScreen) {
      return desktopIllustrationAlt;
    } else if (isLaptopScreen) {
      return laptopIllustrationAlt;
    } else {
      return mobileIllustrationAlt;
    }
  };

  return {
    contactsSectionRef,
    isObserved,
    header,
    headerCaption,
    illustrationAlt: chooseAlt(),
    speechBubble,
  };
}
