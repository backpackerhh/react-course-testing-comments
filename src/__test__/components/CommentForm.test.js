import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { renderWithRedux } from "../utils";
import CommentForm from "../../components/CommentForm";

describe("Comment Form", () => {
  it('has a disabled button until both comment textbox and "Your Name" field have a value', () => {
    // Arrange
    const comment = "Never put off until tomorrow what can be done today.";
    const author = "Sensei Wu";

    // Act
    const { getByLabelText, getByPlaceholderText, getByText } = renderWithRedux(<CommentForm />);

    // Assert
    const submitButton = getByText("Add Comment");

    expect(submitButton.disabled).toEqual(true);

    fireEvent.change(getByPlaceholderText("Write something..."), { target: { value: comment } });

    expect(submitButton.disabled).toEqual(true);

    fireEvent.change(getByLabelText("Your Name"), { target: { value: author } });

    expect(submitButton.disabled).toEqual(false);
  });
});
