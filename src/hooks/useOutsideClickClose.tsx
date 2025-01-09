import { useEffect, useRef, MutableRefObject } from 'react';

export default function useClickOutsideClose<
  T extends Element,
  U extends Element,
>(
  setOpeningState: React.Dispatch<React.SetStateAction<boolean>>,
  openingState: boolean,
): [MutableRefObject<T | null>, MutableRefObject<U | null>] {
  const ref1 = useRef<T | null>(null);
  const ref2 = useRef<U | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      (ref1.current && ref1.current.contains(event.target as Node)) ||
      (ref2.current && ref2.current.contains(event.target as Node))
    ) {
      return;
    }
    setOpeningState(false);
  };

  useEffect(() => {
    if (openingState) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [openingState]);

  return [ref1, ref2];
}
