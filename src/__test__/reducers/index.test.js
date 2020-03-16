import { createStore } from "redux";

import rootReducer from "../../reducers";
import commentsReducer from "../../reducers/commentsReducer";
import formReducer from "../../reducers/formReducer";

let store = createStore(rootReducer);

it("returns an object containing expected properties", () => {
  expect(Object.keys(store.getState())).toEqual(["comments", "form"]);
});

it("checks that root reducer matches what child reducers return given an empty action", () => {
  expect(store.getState().comments).toEqual(commentsReducer(undefined, {}));
  expect(store.getState().form).toEqual(formReducer(undefined, {}));
});
