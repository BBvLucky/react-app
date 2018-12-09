import React, { Component } from "react";
import "../../../../../style.scss";

class MostPopular extends Component {
    render() {
        return (
            <section className="main-aside-most-popular">
                <h3 className="main-aside-most-popular-caption">Most popular</h3>
                <ul className="main-aside-most-popular-list">
                    <li className="main-aside-most-popular-list-item"><a href="#" className="main-aside-most-popular-list-item-link">Theme 1</a></li>
                    <li className="main-aside-most-popular-list-item"><a href="#" className="main-aside-most-popular-list-item-link">Theme 2</a></li>
                    <li className="main-aside-most-popular-list-item"><a href="#" className="main-aside-most-popular-list-item-link">Theme 3</a></li>
                </ul>
            </section>
        )
    }
}

export default MostPopular;