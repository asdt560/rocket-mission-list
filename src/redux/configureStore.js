import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missionsslice';

const store = configureStore({
  reducer: {
    missionsReducer,
    rocketsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
