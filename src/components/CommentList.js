import React, { useEffect } from "react";
import { connect } from "react-redux";

import CommentCard from "./CommentCard";
import { fetchComments } from "../actions";

const CommentList = props => {
  useEffect(() => {
    props.fetchComments();
  }, []);

  return (
    <div>
      {props.comments.map(comment => (
        <CommentCard key={comment.id} {...comment} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps, { fetchComments })(CommentList);
