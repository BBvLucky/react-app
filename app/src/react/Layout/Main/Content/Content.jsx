import React, { Component } from "react";
import "../../../../style.scss";


class Content extends Component {
  render() {
    const { children } = this.props;
    return <div id="content">{children}</div>;
  }
}

export default Content;
