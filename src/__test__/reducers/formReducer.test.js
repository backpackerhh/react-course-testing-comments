import formReducer, { initialState } from "../../reducers/formReducer";
import * as types from "../../actions/types";

it("returns initial state given an empty action", () => {
  const state = undefined;
  const action = {};

  expect(formReducer(state, action)).toEqual(initialState);
});

it("returns expected body given an action to set body, being previously empty", () => {
  const state = undefined;
  const action = { type: types.SET_COMMENT_BODY, payload: "A" };

  expect(formReducer(state, action)).toHaveProperty("body", "A");
});

it("returns expected body given an action to set body, being previously non-empty", () => {
  const state = { body: "A" };
  const action = { type: types.SET_COMMENT_BODY, payload: "Ab" };

  expect(formReducer(state, action)).toHaveProperty("body", "Ab");
});

it("returns expected author given an action to set author, being previously empty", () => {
  const state = undefined;
  const action = { type: types.SET_COMMENT_AUTHOR, payload: "D" };

  expect(formReducer(state, action)).toHaveProperty("author", "D");
});

it("returns expected author given an action to set author, being previously non-empty", () => {
  const state = { author: "D" };
  const action = { type: types.SET_COMMENT_AUTHOR, payload: "Da" };

  expect(formReducer(state, action)).toHaveProperty("author", "Da");
});

it("returns initial state given an action to clear the form", () => {
  const state = undefined;
  const action = { type: types.CLEAR_FORM };

  expect(formReducer(state, action)).toEqual(initialState);
});
