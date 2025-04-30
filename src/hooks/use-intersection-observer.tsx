import { useEffect, useRef } from 'react';

export default function useIntersectionObserver<T extends HTMLElement>(
  handleIntersection: () => void,
  handleOutsideIntersection: (() => void) | undefined,
  thresholdValue: number,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleIntersection();
          }
          if (
            !entry.isIntersecting &&
            typeof handleOutsideIntersection === 'function'
          ) {
            handleOutsideIntersection();
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: thresholdValue,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return ref;
}
