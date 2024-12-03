import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { FaWindowClose } from 'react-icons/fa';
import css from './use-copy-text-with-popup.module.scss';

type UseCopyTextWithPopupResult = {
  handleCopyClick: () => void;
  Popup: () => JSX.Element | null;
};

export default function useCopyTextWithPopup(
  textToCopy: string,
  popupText: string,
): UseCopyTextWithPopupResult {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy).then(() => setIsPopupOpen(true));
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isPopupOpen) {
      const fadeTimeout = setTimeout(() => setIsPopupOpen(false), 4000);

      return () => {
        clearTimeout(fadeTimeout);
      };
    }
  }, [isPopupOpen]);

  const Popup = () =>
    isPopupOpen ? (
      <div className={cx(css.popupContainer)} role="alert" aria-live="polite">
        <p>
          {popupText}
          <button
            type="button"
            className={cx(css.exitIcon)}
            onClick={() => setIsPopupOpen(false)}
          >
            <FaWindowClose />
          </button>
        </p>
      </div>
    ) : null;

  return { handleCopyClick, Popup };
}
