import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './feautures/counter/counterSlice.js';


export const store = configureStore({
  reducer: {
    counter2: counterReducer,
  },
});
