import React, { useState } from "react";

const CommentForm = () => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const hasInvalidFields = () => {
    if (body.trim() === "" || author.trim() === "") {
      return true;
    }

    return false;
  };

  return (
    <form>
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

export default CommentForm;
