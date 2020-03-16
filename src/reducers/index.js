import { combineReducers } from "redux";

import commentsReducer, { initialState as commentsReducerInitialState } from "./commentsReducer";
import formReducer, { initialState as formReducerInitialState } from "./formReducer";

export default combineReducers({
  comments: commentsReducer,
  form: formReducer
});

export const initialState = {
  comments: commentsReducerInitialState,
  form: formReducerInitialState
};
