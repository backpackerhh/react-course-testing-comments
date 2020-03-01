import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import fakeServer from "../apis/fakeServer";

const CommentForm = ({ addComment }) => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const hasInvalidFields = () => {
    if (body.trim() === "" || author.trim() === "") {
      return true;
    }

    return false;
  };

  const onSubmit = async event => {
    event.preventDefault();

    const newComment = {
      id: uuid(),
      body,
      author
    };

    await fakeServer.post("/comments", newComment);

    addComment(newComment);
    clearForm();
  };

  const clearForm = () => {
    setBody("");
    setAuthor("");
  };

  return (
    <form onSubmit={onSubmit}>
      <h4>Add a comment</h4>

      <div>
        <textarea
          onChange={e => setBody(e.target.value)}
          placeholder="Write something..."
          name="body"
          value={body}
        />
      </div>

      <div>
        <label htmlFor="author" aria-labelledby="author">
          Your Name
        </label>
        <input
          onChange={e => setAuthor(e.target.value)}
          id="author"
          type="text"
          name="author"
          value={author}
        />
      </div>

      <button disabled={hasInvalidFields()}>Add Comment</button>
    </form>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default CommentForm;
