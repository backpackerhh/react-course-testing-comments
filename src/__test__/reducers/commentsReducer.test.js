import commentsReducer, { initialState } from "../../reducers/commentsReducer";
import * as types from "../../actions/types";

it("returns initial state given an empty action", () => {
  const state = undefined;
  const action = {};

  expect(commentsReducer(state, action)).toEqual(initialState);
});

it("returns initial state given a request to fetch comments", () => {
  const state = undefined;
  const action = { type: types.FETCH_COMMENTS_REQUEST };

  expect(commentsReducer(state, action)).toEqual(initialState);
});

it("returns payload given a success request to fetch comments", () => {
  const state = undefined;
  const action = { type: types.FETCH_COMMENTS_SUCCESS, payload: "Test" };

  expect(commentsReducer(state, action)).toEqual("Test");
});

it("returns initial state given a failure request to fetch comments", () => {
  const state = undefined;
  const action = { type: types.FETCH_COMMENTS_FAILURE };

  expect(commentsReducer(state, action)).toEqual(initialState);
});

it("returns collection of comments given an action to add a new comment (no previous comments)", () => {
  const newComment = {
    id: 1,
    body: "I do love writing tests",
    author: "The Notester"
  };
  const state = undefined;
  const action = { type: types.ADD_COMMENT, payload: newComment };

  expect(commentsReducer(state, action)).toEqual([newComment]);
});

it("returns collection of comments given an action to add a new comment (with previous comments)", () => {
  const previousComment = {
    id: 1,
    body: "Nothing is better than a good comment app",
    author: "Comment Hater"
  };
  const newComment = {
    id: 2,
    body: "I do love writing tests",
    author: "The Notester"
  };
  const state = [previousComment];
  const action = { type: types.ADD_COMMENT, payload: newComment };

  expect(commentsReducer(state, action)).toEqual([previousComment, newComment]);
});
