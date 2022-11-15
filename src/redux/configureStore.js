import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsreducer from './missions/missionsslice';
import rocketsReducer from './rockets/rocketsSlice';

const middlewares = [logger, thunk];

const store = configureStore({
  reducer: {
    missionsreducer,
    rocketsReducer,
  },
}, applyMiddleware(...middlewares));

export default store;
