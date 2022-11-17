import React from "react";
import { render } from "@testing-library/react";
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import missionsreducer from '../redux/missions/missionsslice';
import rocketsReducer from '../redux/rockets/rocketsSlice';

const middlewares = [logger, thunk];

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        missionsreducer,
        rocketsReducer,
      },
    }, applyMiddleware(...middlewares)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}