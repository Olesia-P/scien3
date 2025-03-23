import { useDispatch } from 'react-redux';
import { addToast, removeToast } from '@/store/modules/toast-slice';

const useToast = () => {
  const dispatch = useDispatch();

  const showToast = (message: string, type?: 'success' | 'error' | 'info') => {
    const id = Math.random();
    dispatch(addToast({ id, message, type }));

    setTimeout(() => {
      dispatch(removeToast(id));
    }, 3000);
  };

  return showToast;
};

export default useToast;
