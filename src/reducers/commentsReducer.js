import * as types from "../actions/types";

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS_SUCCESS:
      return action.payload;
    case types.ADD_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
