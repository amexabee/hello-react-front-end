import { configureStore } from '@reduxjs/toolkit';
import reducer from './greet';

const store = configureStore({
  reducer: {
    messages: reducer,
  },
});

export default store;
