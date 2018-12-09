import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import Chance from "chance";
// import moment from "moment";
import Button from "@material-ui/core/Button";
import Comment from "./Comment.jsx";
import {
  getCommentsList,
  getCommentsLoading,
  fetchComments,
  addComment
} from "../../../../redux/modules/comments.js";

import "../../../../style.scss";

const chanceGenerator = new Chance();

class Comments extends PureComponent {
  state = {
    inputValue: ""
  };

  componentDidMount() {
    this.props.fetchComments();
  };

  updateInputValue = event => {
    let updatedInput = "";
    if (event) {
      updatedInput = event.target.value;
    };

    this.setState({
      inputValue: updatedInput
    });
  };

  submitComment = () => {
    const { inputValue, comments } = this.state;

    if (inputValue.length === 0) {
      return;
    }

    const commentData = {
      id: chanceGenerator.string({
        pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      }),
      person: chanceGenerator.name({ nationality: "en" }),
      text: inputValue
    };

    this.props.addComment(commentData).then(() => {
      this.setState({
        inputValue: ""
      });
    });
  };

  onEnter = event => {
    if (event.key === "Enter") {
      this.submitComment();
    }
  };

  // commentInfo(id, event) {
  //   alert(id);
  // }


  render() {
    const { inputValue } = this.state;
    const { comments, loading } = this.props;
    return (
      <div className="comments">
        <div className="comments-submit">
          <h3 className="comments-submit-caption">Add a comment</h3>
          <input
            disabled={loading}
            value={inputValue}
            onChange={this.updateInputValue}
            onKeyPress={this.onEnter}
            className="comments-submit-input"
          />
          <Button onClick={this.submitComment}>Submit</Button>
        </div>
        <div className="comments-container">
          {comments.length > 0
            ? comments.map(comment => (
              <Comment
                key={comment.id}
                comment={comment}
                // commentInfoFunction={this.commentInfo.bind(this, comment.id)}
                // date={time.format("DD.MM HH:mm")}
              />
            ))
            : "There are no comments yet. Be first!"}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: getCommentsList(state),
    loading: getCommentsLoading(state)
  };
};

const mapDispatchToProps = {
  fetchComments,
  addComment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
