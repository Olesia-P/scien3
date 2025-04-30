import { useState } from 'react';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { createHeaderTag } from '@/utils/functions';

export default function useServiceInfoBlock(
  headerLevel: number,
  nestedListIcon?: string,
) {
  const [isObserved, setIsObserved] = useState(false);

  const serviceInfoBlockRef = useIntersectionObserver(
    () => setIsObserved(true),
    undefined,
    0,
  );

  const MainHeaderTag = createHeaderTag(headerLevel);
  const NestedHeaderTag = createHeaderTag(headerLevel + 1);

  const decideIcon = () => {
    switch (nestedListIcon) {
      case 'laptop':
        return '/icons/laptop_icon.png';
      case 'rocket':
        return '/icons/rocket_icon.png';
      case 'cup':
        return '/icons/stationary_cup_icon.png';
      case 'pouring':
        return '/icons/pouring_icon.png';
      case 'ball':
        return '/icons/angled_ball_icon.png';
      default:
        return '/icons/rocket_icon.png';
    }
  };

  return {
    isObserved,
    serviceInfoBlockRef,
    icon: decideIcon(),
    MainHeaderTag,
    NestedHeaderTag,
  };
}
