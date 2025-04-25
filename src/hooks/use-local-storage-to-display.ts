import { useEffect, useState } from 'react';

export default function useLocalStorageToDisplay(
  key: string,
  daysToExpire: number,
) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem(key);
    const now = new Date().getTime();

    if (
      !lastShown ||
      now - parseInt(lastShown, 10) > daysToExpire * 24 * 60 * 60 * 1000
    ) {
      setIsOpen(true);
      localStorage.setItem(key, now.toString());
    }
  }, []);

  return { isOpen, setIsOpen };
}
