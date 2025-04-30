/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import css from './toast.module.scss';
import useThisToast from './use-this-toast';

export default function Toast() {
  const { closeBtnRefs, handleToastClose, toasts } = useThisToast();

  return (
    <>
      {toasts.length > 0 && (
        <div className={css.container} role="alert">
          {toasts.map((toast, index) => (
            <div className={css.toast} key={toast.id}>
              <p>{toast.message}</p>
              <button
                type="button"
                className={css.exitBtn}
                onClick={() => handleToastClose(toast.id)}
                aria-label="Close notification"
                ref={(element) => {
                  closeBtnRefs.current[index] = element;
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') handleToastClose(toast.id);
                }}
              >
                <FaWindowClose aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
