import React from "react";
import { render, wait, cleanup } from "@testing-library/react";

import fakeServer from "../../apis/fakeServer";
import App from "../../components/App";

const comment_1 = {
  id: 1,
  body: "I do love writing tests",
  author: "The Notester"
};
const comment_2 = {
  id: 2,
  body: "Nothing is better than a good comment app",
  author: "Comment Hater"
};

afterEach(cleanup);

beforeEach(() => {
  fakeServer.get = jest.fn(() => Promise.resolve({ data: [comment_1, comment_2] }));
});

describe("App", () => {
  it("fetches comments and renders them to the page", async () => {
    const { getByText } = render(<App />);

    await wait(() => getByText(comment_1.body));

    expect(getByText(comment_1.author)).toBeDefined();
    expect(getByText(comment_2.body)).toBeDefined();
    expect(getByText(comment_2.author)).toBeDefined();
  });
});
