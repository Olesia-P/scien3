import React, { useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom';
import css from './modal.module.scss';
import { useLanguage } from '@/hooks/use-language';
import { textModal } from '@/texts/modal/text-modal';
import LangSwitch from '@/components/layout/navbar/lang-switch/lang-switch';
import { useFocusTrap } from '@/hooks/use-focus-trap';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  const language = useLanguage();
  const { mainHeader, text, button, glory } = textModal[language];
  const modalRef = useRef<HTMLDivElement>(null);

  useFocusTrap(modalRef, isOpen);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  return (
    <section className={css.container}>
      <style jsx global>{`
        body {
          overflow: hidden;
        }
      `}</style>
      <div
        className={css.outline}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={modalRef}
        tabIndex={-1}
      >
        <article className={css.card}>
          <h2 className={css.header} id="modal-title">
            {mainHeader}
          </h2>

          {text.map((p) => (
            <p key={p} className={css.text}>
              {p}
            </p>
          ))}

          <p className={css.glory}>
            {glory} <img src="/icons/ukraine.png" alt="Ukrainian flag" />
          </p>

          <button type="button" className={css.acceptBtn} onClick={onClose}>
            {button}
          </button>
          <div className={css.switchWrap}>
            <LangSwitch fontSize="s" />
          </div>
        </article>
      </div>
    </section>
  );
}
