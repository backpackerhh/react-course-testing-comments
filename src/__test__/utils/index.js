import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";

import reducers from "../../reducers";

export const renderWithRedux = (
  component,
  { initialState, store = createStore(reducers, initialState, applyMiddleware(thunk)) } = {}
) => {
  return render(wrapWithRedux(component, { initialState, store }));
};

export const wrapWithRedux = (
  component,
  { initialState, store = createStore(reducers, initialState, applyMiddleware(thunk)) } = {}
) => {
  return <Provider store={store}>{component}</Provider>;
};
