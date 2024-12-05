import { useEffect, useRef, MutableRefObject } from 'react';

export default function useMouseOutsideClose(
  setOpeningState: React.Dispatch<React.SetStateAction<boolean>>,
  openingState: boolean,
): MutableRefObject<any> {
  const ref = useRef<any>(null);

  const handleMouseOutside = (event: MouseEvent) => {
    if (ref.current && ref.current.contains(event.target as Node)) {
      return;
    }
    setOpeningState(false);
  };

  useEffect(() => {
    if (openingState) {
      document.addEventListener('mousemove', handleMouseOutside);
    } else {
      document.removeEventListener('mousemove', handleMouseOutside);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseOutside);
    };
  }, [openingState]);

  return ref;
}
