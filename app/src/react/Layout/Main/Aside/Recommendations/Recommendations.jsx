import React, { Component } from "react";
import "../../../../../style.scss";

class Recommendations extends Component {
    render() {
        return (
            <section className="main-aside-recommendations">
                <h3 className="main-aside-recommendations-caption">Recommendations</h3>
                <ul className="main-aside-recommendations-list">
                    <li className="main-aside-recommendations-list-item"><a href="#" className="main-aside-recommendations-list-item-link">Theme 1</a></li>
                    <li className="main-aside-recommendations-list-item"><a href="#" className="main-aside-recommendations-list-item-link">Theme 2</a></li>
                    <li className="main-aside-recommendations-list-item"><a href="#" className="main-aside-recommendations-list-item-link">Theme 3</a></li>
                </ul>
            </section>
        )
    }
}

export default Recommendations;