import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/reducers/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})

