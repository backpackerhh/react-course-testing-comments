import fakeServer from "../apis/fakeServer";
import * as types from "./types";

const fetchCommentsRequest = () => {
  return {
    type: types.FETCH_COMMENTS_REQUEST
  };
};

const fetchCommentsSuccess = data => {
  return {
    type: types.FETCH_COMMENTS_SUCCESS,
    payload: data
  };
};

const fetchCommentsFailure = () => {
  return {
    type: types.FETCH_COMMENTS_FAILURE,
    payload: []
  };
};

export const fetchComments = () => async dispatch => {
  dispatch(fetchCommentsRequest());

  try {
    const response = await fakeServer.get("/comments");

    dispatch(fetchCommentsSuccess(response.data));
  } catch {
    dispatch(fetchCommentsFailure());
  }
};

export const addComment = formValues => async dispatch => {
  await fakeServer.post("/comments", formValues);

  dispatch({
    type: types.ADD_COMMENT,
    payload: formValues
  });
};

export const setCommentBody = value => async dispatch => {
  dispatch({
    type: types.SET_COMMENT_BODY,
    payload: value
  });
};

export const setCommentAuthor = value => async dispatch => {
  dispatch({
    type: types.SET_COMMENT_AUTHOR,
    payload: value
  });
};

export const clearForm = () => async dispatch => {
  dispatch({
    type: types.CLEAR_FORM
  });
};
