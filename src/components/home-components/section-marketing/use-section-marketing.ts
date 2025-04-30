import { useState } from 'react';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { useLanguage } from '@/hooks/use-language';
import { textSectionMarketing } from '@/texts/home/text-section-marketing';

export default function useSectionMarketing() {
  const language = useLanguage();
  const { statements } = textSectionMarketing[language];
  const images = statements.map(({ img, webp, alt }) => ({ img, webp, alt }));

  const [isObserved, setIsObserved] = useState(false);

  const handleIntersection = () => {
    setIsObserved(true);
  };

  const marketingSectionRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0.2,
  );

  return {
    marketingSectionRef,
    isObserved,
    statements,
    images,
  };
}
