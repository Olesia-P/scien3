import { useState, useEffect } from 'react';

export default function useMediaQuery(maxWidth: number) {
  const [isDesiredWidth, setIsDesiredWidth] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window?.innerWidth;
      setIsDesiredWidth(currentWindowWidth > maxWidth);
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [maxWidth]);

  return isDesiredWidth;
}
