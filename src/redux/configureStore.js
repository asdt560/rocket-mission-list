import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsreducer from './missions/missionsslice';

const middlewares = [logger, thunk];

const store = configureStore({
  reducer: {
    missionsreducer,
  },
}, applyMiddleware(...middlewares));

export default store;
