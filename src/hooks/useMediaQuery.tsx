import { useState, useEffect } from 'react';

export default function useMediaQuery(maxWidth: number) {
  const [isDesiredWidth, setIsDesiredWidth] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window?.innerWidth;
      setIsDesiredWidth(currentWindowWidth > maxWidth);
    };

    // Run once to set the initial value
    resizeHandler();

    // Add event listener for resize
    window.addEventListener('resize', resizeHandler);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', resizeHandler);
  }, [maxWidth]);

  return isDesiredWidth;
}
