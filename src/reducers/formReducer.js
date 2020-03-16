import * as types from "../actions/types";

export const initialState = { body: "", author: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COMMENT_BODY:
      return { ...state, body: action.payload };
    case types.SET_COMMENT_AUTHOR:
      return { ...state, author: action.payload };
    case types.CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};
