import React from "react";
import PropTypes from "prop-types";

const CommentCard = ({ body, author }) => (
  <div>
    <p>{body}</p>
    <p>{author}</p>
  </div>
);

CommentCard.propTypes = {
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default CommentCard;
