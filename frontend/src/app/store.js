import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";

import authReducer from '../features/auth/authSlice'


export const store = configureStore({
  reducer: {
      auth: authReducer,
  },
});
  
