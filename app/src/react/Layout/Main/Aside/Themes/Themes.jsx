import React, { Component } from "react";
import "../../../../../style.scss";

class Themes extends Component {
    render() {
        return (
            <section className="main-aside-themes">
                <h3 className="main-aside-themes-caption">Themes</h3>
                <ul className="main-aside-themes-list">
                    <li className="main-aside-themes-list-item"><a href="#" className="main-aside-themes-list-item-link">Theme 1</a></li>
                    <li className="main-aside-themes-list-item"><a href="#" className="main-aside-themes-list-item-link">Theme 2</a></li>
                    <li className="main-aside-themes-list-item"><a href="#" className="main-aside-themes-list-item-link">Theme 3</a></li>
                </ul>
            </section>
        )
    }
}

export default Themes;