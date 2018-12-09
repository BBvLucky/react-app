import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../../../style.scss";

const PAGES = {
    HOME: 0,
    ARTICLES: 1,
    COMMENTS: 2,
    USERS: 3
};

const PAGE_NAMES = {
    [PAGES.HOME]: "Home",
    [PAGES.ARTICLES]: "Articles",
    [PAGES.COMMENTS]: "Comments",
    [PAGES.USERS]: "Users"
};

const PAGE_LINKS = {
    [PAGES.HOME]: "/",
    [PAGES.ARTICLES]: "/articles",
    [PAGES.COMMENTS]: "/comments",
    [PAGES.USERS]: "/users"
};

const NAVIGATION_LINKS = (() => {
    return Object.values(PAGES).map(pageId => {
        return {
            id: pageId,
            title: PAGE_NAMES[pageId],
            to: PAGE_LINKS[pageId]
        };
    });
})();

class Menu extends Component {

    render() {
        return (
            <nav className="header-nav">
                {NAVIGATION_LINKS.map((link, linkIndex) => {
                    return (
                        <NavLink
                            exact
                            key={`nav-link-${linkIndex}`}
                            to={link.to}
                            activeClassName={"active"}
                            className={"header-nav-link"}
                        >
                            {link.title}
                        </NavLink>
                    );
                })}
            </nav>
        )
    }
}

export default Menu;