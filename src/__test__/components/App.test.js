import React from "react";
import { render, wait, cleanup, fireEvent } from "@testing-library/react";

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
const newComment = {
  body: "Brave new world of testing",
  author: "Spongebob"
};

afterEach(cleanup);

beforeEach(() => {
  fakeServer.get = jest.fn(() => Promise.resolve({ data: [comment_1, comment_2] }));
  fakeServer.post = jest.fn(() => Promise.resolve(newComment));
});

describe("App", () => {
  it("fetches comments and renders them to the page", async () => {
    const { getByText } = render(<App />);

    await wait(() => getByText(comment_1.body));

    expect(getByText(comment_1.author)).toBeDefined();
    expect(getByText(comment_2.body)).toBeDefined();
    expect(getByText(comment_2.author)).toBeDefined();
  });

  it("creates a new comment, renders it and clears out form upon submission", async () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(<App />);

    await wait(() => getByText(comment_1.body));

    const commentTextfieldNode = getByPlaceholderText("Write something...");
    const nameFieldNode = getByLabelText("Your Name");
    const submitButton = getByText("Add Comment");

    fireEvent.change(commentTextfieldNode, { target: { value: newComment.body } });
    fireEvent.change(nameFieldNode, { target: { value: newComment.author } });
    fireEvent.click(submitButton);

    await wait(() => getByText(newComment.author));

    expect(commentTextfieldNode.value).toEqual("");
    expect(nameFieldNode.value).toEqual("");
  });
});
