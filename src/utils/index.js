import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const wrapWithRedux = (
  component,
  {
    initialState,
    store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)))
  } = {}
) => {
  return <Provider store={store}>{component}</Provider>;
};
