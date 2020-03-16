import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import fakeServer from "../../apis/fakeServer";
import * as actions from "../../actions";
import * as types from "../../actions/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("fetchComments", () => {
  it("creates FETCH_COMMENTS_SUCCESS when fetching comments has been done", () => {
    const comments = [
      {
        id: 1,
        body: "I do love writing tests",
        author: "The Notester"
      }
    ];

    fakeServer.get = jest.fn(() => Promise.resolve({ data: comments }));

    const expectedActions = [
      {
        type: types.FETCH_COMMENTS_REQUEST
      },
      {
        type: types.FETCH_COMMENTS_SUCCESS,
        payload: comments
      }
    ];

    const store = mockStore({ comments: [] });

    return store.dispatch(actions.fetchComments()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates FETCH_COMMENTS_FAILURE when fetching comments has failed", () => {
    fakeServer.get = jest.fn(() => Promise.reject(new Error("fail")));

    const expectedActions = [
      {
        type: types.FETCH_COMMENTS_REQUEST
      },
      {
        type: types.FETCH_COMMENTS_FAILURE,
        payload: []
      }
    ];

    const store = mockStore({ comments: [] });

    return store.dispatch(actions.fetchComments()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("addComment", () => {
  it("creates ADD_COMMENT when comment has been successfully created", () => {
    fakeServer.post = jest.fn();

    const newComment = {
      id: 1,
      body: "I do love writing tests",
      author: "The Notester"
    };
    const expectedActions = [
      {
        type: types.ADD_COMMENT,
        payload: newComment
      }
    ];

    const store = mockStore({ comments: [] });

    return store.dispatch(actions.addComment(newComment)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("setCommentBody", () => {
  it("creates SET_COMMENT_BODY when user type in a letter for comment body", () => {
    const expectedActions = [
      {
        type: types.SET_COMMENT_BODY,
        payload: "a"
      }
    ];

    const store = mockStore({ form: [] });

    return store.dispatch(actions.setCommentBody("a")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe("setCommentAuthor", () => {
  it("creates SET_COMMENT_AUTHOR when user type in a letter for comment body", () => {
    const expectedActions = [
      {
        type: types.SET_COMMENT_AUTHOR,
        payload: "D"
      }
    ];

    const store = mockStore({ form: [] });

    return store.dispatch(actions.setCommentAuthor("D")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("clearForm", () => {
  it("creates CLEAR_FORM after form is submitted", () => {
    const expectedActions = [
      {
        type: types.CLEAR_FORM
      }
    ];

    const store = mockStore({ form: [] });

    return store.dispatch(actions.clearForm()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
