import React from "react";
import { render } from "@testing-library/react";

import CommentCard from "../../components/CommentCard";

describe("Comment Card", () => {
  it("renders the comment and the author", () => {
    // Arrange
    const commentBody = "React Testing Library is great";
    const author = "Luke Ghenco";

    // Act
    const { getByText } = render(<CommentCard body={commentBody} author={author} />);

    // Assert
    expect(getByText(commentBody)).toBeDefined();
    expect(getByText(author)).toBeDefined();
  });
});
