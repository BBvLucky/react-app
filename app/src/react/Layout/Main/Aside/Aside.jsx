import React, { Component } from "react";

import "../../../../style.scss";

import Search from "./Search/Search.jsx";
import Themes from "./Themes/Themes.jsx";
import Recomendations from "./Recommendations/Recommendations.jsx";
import MostPopular from "./Most-popular/Most-popular.jsx";
import Advertisments from "./Advertisments/Advertisments.jsx";

class Aside extends Component {
    render() {
        return (
            <aside className="main-aside">
                <Search />
                <Themes />
                <Recomendations />
                <MostPopular />
                <Advertisments />
            </aside>
        )
    }
}

export default Aside;