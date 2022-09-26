import {configureStore} from '@reduxjs/toolkit';
import reactotron from '../src/ReactronConfig';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
  enhancers: [reactotron.createEnhancer()],
});

export default store;
