import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missionsslice';

const middlewares = [logger, thunk];

const store = configureStore({
  reducer: {
    missionsReducer,
    rocketsReducer,
  },
}, applyMiddleware(...middlewares));

export default store;
