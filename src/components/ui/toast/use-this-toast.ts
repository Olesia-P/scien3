import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { removeToast } from '@/store/modules/toast-slice';

export default function useThisToast() {
  const closeBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const { toasts } = useSelector(({ toast }: RootState) => toast);
  const dispatch = useDispatch();

  const handleToastClose = (id: number) => {
    dispatch(removeToast(id));
  };

  useEffect(() => {
    if (toasts.length > 0) {
      closeBtnRefs.current[0]?.focus();
    }
  }, [toasts.length]);

  return {
    closeBtnRefs,
    handleToastClose,
    toasts,
  };
}
