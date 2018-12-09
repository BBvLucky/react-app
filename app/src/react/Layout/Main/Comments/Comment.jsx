import React from "react";
import { withRouter } from "react-router-dom";
import "../../../../style.scss";
import moment from "moment";

const Comment = props => {
  const { comment } = props;
  return (
    <div className="comment">
      <span className="comment-person">{`${comment.person}:`}</span>
      <span className="comment-text">{comment.text}</span>
      <span className="comment-date">
        {
          moment
          .utc(comment.addedDate)
          .local()
          .format("DD.MM.YYYY HH:mm:ss")
        }
      </span>
    </div>
  )
}

export default Comment;
