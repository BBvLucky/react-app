import React, { Component } from "react";
import "../../../style.scss";

import Menu from "./Menu/Menu.jsx";
import SimpleMenu from "./SimpleMenu/SimpleMenu.jsx";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-wrapper">
                    <Menu />
                    <SimpleMenu />
                </div>
            </header>
        )
    }
}

export default Header;