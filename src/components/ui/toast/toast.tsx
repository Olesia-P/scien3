/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useRef } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import css from './toast.module.scss';
import { RootState } from '@/store/store';
import { removeToast } from '@/store/modules/toast-slice';

export default function Toast() {
  const { toasts } = useSelector(({ toast }: RootState) => toast);

  const dispatch = useDispatch();

  const closeBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (toasts.length > 0) {
      closeBtnRefs.current[0]?.focus();
    }
  }, [toasts.length]);

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
                onClick={() => dispatch(removeToast(toast.id))}
                aria-label="Close notification"
                ref={(element) => {
                  closeBtnRefs.current[index] = element;
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') dispatch(removeToast(toast.id));
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
