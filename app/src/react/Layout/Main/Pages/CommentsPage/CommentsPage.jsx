import React, { PureComponent } from "react";
import Comments from "../../Comments/Comments.jsx";
import "../../../../../style.scss";

class CommentsPage extends PureComponent {
    render() {
        return (
            <div><Comments/></div>
        )
    }
}

export default CommentsPage;