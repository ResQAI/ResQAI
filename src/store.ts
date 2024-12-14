import { configureStore } from '@reduxjs/toolkit'
import { disasterSlice } from './store/disasterSlice';

export const store = configureStore({
  reducer: {
    activeDisaster: disasterSlice.reducer,
  },
});