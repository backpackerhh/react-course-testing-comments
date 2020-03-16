import React from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

import { setCommentBody, setCommentAuthor, addComment, clearForm } from "../actions";

const CommentForm = props => {
  const hasInvalidFields = () => {
    if (props.body.trim() === "" || props.author.trim() === "") {
      return true;
    }

    return false;
  };

  const onSubmit = event => {
    event.preventDefault();

    props.addComment({
      id: uuid(),
      body: props.body,
      author: props.author
    });

    props.clearForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <h4>Add a comment</h4>

      <div>
        <textarea
          onChange={e => props.setCommentBody(e.target.value)}
          placeholder="Write something..."
          name="body"
          value={props.body}
        />
      </div>

      <div>
        <label htmlFor="author" aria-labelledby="author">
          Your Name
        </label>
        <input
          onChange={e => props.setCommentAuthor(e.target.value)}
          id="author"
          type="text"
          name="author"
          value={props.author}
        />
      </div>

      <button disabled={hasInvalidFields()}>Add Comment</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    body: state.form.body,
    author: state.form.author
  };
};

const mapDispatchToProps = {
  addComment,
  setCommentBody,
  setCommentAuthor,
  clearForm
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
