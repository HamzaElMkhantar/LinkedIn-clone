import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import { createStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// const store = createStore(configureStore)
