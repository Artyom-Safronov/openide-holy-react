import { configureStore } from '@reduxjs/toolkit';
import { proFormApi } from '../services/proFormApi';
import formReducer from './formSlice';

export const store = configureStore({
  reducer: {
    proForm: formReducer,
    [proFormApi.reducerPath]: proFormApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(proFormApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
