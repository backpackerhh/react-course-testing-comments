import { combineReducers } from "redux";

import commentsReducer from "./commentsReducer";
import formReducer from "./formReducer";

export default combineReducers({
  comments: commentsReducer,
  form: formReducer
});
