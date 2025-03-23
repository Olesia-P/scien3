import { configureStore } from '@reduxjs/toolkit';
import toastSliceReducer from './modules/toast-slice';

export const store = configureStore({
  reducer: {
    toast: toastSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
