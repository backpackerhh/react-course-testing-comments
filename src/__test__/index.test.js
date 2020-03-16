import React from "react";
import ReactDOM from "react-dom";

import App from "../components/App";
import { wrapWithRedux } from "../utils";

test("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(wrapWithRedux(<App />), div);

  ReactDOM.unmountComponentAtNode(div);
});
