import React from "react";
import ReactDOM from "react-dom";

import App from "../components/App";
import { wrapWithRedux } from "./utils";
import { initialState } from "../reducers";

test("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(wrapWithRedux(<App />, { initialState: initialState }), div);

  ReactDOM.unmountComponentAtNode(div);
});
