import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { wrapWithRedux } from "./utils";

ReactDOM.render(wrapWithRedux(<App />), document.querySelector("#root"));
