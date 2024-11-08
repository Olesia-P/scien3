import { useEffect, useRef } from 'react';

export default function useIntersectionObserver(
  handleIntersection: () => void,
  handleOutsideIntersection: (() => void) | undefined,
  thresholdValue: number,
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleIntersection(); // what to do if element is on the screen
          }
          if (
            !entry.isIntersecting &&
            typeof handleOutsideIntersection === 'function' // to execute only is you passed this function
          ) {
            handleOutsideIntersection(); // what to do if element escapes the screen
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: thresholdValue, // from 0 to 1, shows how many percents of the element should show to react
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    // Return the cleanup function to disconnect the observer
    return () => {
      observer.disconnect();
    };
  }, []);
  return ref; // put ref to the element you want action for
}
