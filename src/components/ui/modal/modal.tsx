import React from 'react';
import css from './modal.module.scss';
import LangSwitch from '@/components/layout/navbar/lang-switch/lang-switch';
import useModal from './use-modal';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  const { mainHeader, text, button, glory, modalRef } = useModal(isOpen);

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
