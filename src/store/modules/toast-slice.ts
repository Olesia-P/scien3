import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Toast = {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
};

type ToastState = {
  toasts: Toast[];
};

const initialState: ToastState = {
  toasts: [],
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (
      state,
      action: PayloadAction<{
        message: string;
        type?: 'success' | 'error' | 'info';

        id: number;
      }>,
    ) => {
      state.toasts.push({
        id: action.payload.id,
        message: action.payload.message,
        type: action.payload.type || 'info',
      });

      // limit the number of toasts to 3
      if (state.toasts.length > 3) {
        state.toasts.shift();
      }
    },

    removeToast: (state, action: PayloadAction<number>) => {
      const newToasts = state.toasts.filter(
        (toast) => toast.id !== action.payload,
      );
      return { ...state, toasts: newToasts };
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
