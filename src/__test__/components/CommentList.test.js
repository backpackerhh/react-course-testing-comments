import React from "react";
import { render } from "@testing-library/react";

import { renderWithRedux } from "../utils";
import CommentList from "../../components/CommentList";

describe("Comment List", () => {
  it("renders a list of comment cards with their comment and author", () => {
    // Arrange
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

    // Act
    const { getByText } = renderWithRedux(<CommentList />, {
      initialState: {
        comments: [comment_1, comment_2]
      }
    });

    // Assert
    expect(getByText(comment_1.body)).toBeDefined();
    expect(getByText(comment_1.author)).toBeDefined();
    expect(getByText(comment_2.body)).toBeDefined();
    expect(getByText(comment_2.author)).toBeDefined();
  });
});
