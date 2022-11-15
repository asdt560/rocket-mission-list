import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './missions/missionsslice';

const middlewares = [logger, thunk];

const store = configureStore({
  reducer: {
    reducer,
  },
}, applyMiddleware(...middlewares));

export default store;
