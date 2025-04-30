import { useState } from 'react';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { useLanguage } from '@/hooks/use-language';
import { textSectionServices } from '@/texts/home/text-section-services';

export default function useSectionServices() {
  const language = useLanguage();
  const { services, header, ourBenefitsList } = textSectionServices[language];

  const [isCardObserved, setIsCardObserved] = useState(false);

  const cardRef = useIntersectionObserver(
    () => setIsCardObserved(true),
    undefined,
    0,
  );

  return {
    cardRef,
    services,
    header,
    ourBenefitsList,
    isCardObserved,
  };
}
