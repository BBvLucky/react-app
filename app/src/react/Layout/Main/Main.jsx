import React, { Component } from "react";
import Aside from "./Aside/Aside.jsx";
import Content from "./Content/Content.jsx";

import "../../../style.scss";


class Main extends Component {
    render() {
        const { children } = this.props;
        return (
            <main className="main">
                <Content>{ children }</Content>
                <Aside />
            </main>
        )
    }
}

export default Main;