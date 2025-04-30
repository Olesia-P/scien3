import { useEffect, useRef } from 'react';
import { useFocusTrap } from '@/hooks/use-focus-trap';
import { useLanguage } from '@/hooks/use-language';
import { textModal } from '@/texts/modal/text-modal';

export default function useModal(isOpen: boolean) {
  const language = useLanguage();
  const { mainHeader, text, button, glory } = textModal[language];

  const modalRef = useRef<HTMLDivElement>(null);

  useFocusTrap(modalRef, isOpen);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  return {
    mainHeader,
    text,
    button,
    glory,
    modalRef,
  };
}
