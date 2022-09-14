import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/UserSlice/UserSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});