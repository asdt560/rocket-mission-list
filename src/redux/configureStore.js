import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './missions/missionsslice';
import rocketsReducer from './rockets/rocketsSlice';

const middlewares = [logger, thunk];

const store = configureStore({
  reducer: {
    missionsReducer,
    rocketsReducer,
  },
}, applyMiddleware(...middlewares));

export default store;
