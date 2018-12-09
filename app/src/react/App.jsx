import React, { Component, PureComponent }from "react";
import { Switch, Route } from "react-router-dom";

import ReactJson from "react-json-view";

import Page from "./Layout/Page.jsx";
import Header from "./Layout/Header/Header.jsx";
import Main from "./Layout/Main/Main.jsx";
import Footer from "./Layout/Footer/Footer.jsx";

import Home from "./Layout/Main/Pages/Home/Home.jsx";
// import ArticleBody from "./Layout/Main/Pages/Article/ArticleBody.jsx";
import ArticlePage from "./Layout/Main/Pages/ArticlePage/ArticlePage.jsx";
import CommentsPage from "./Layout/Main/Pages/CommentsPage/CommentsPage.jsx";
import Users from "./Layout/Main/Pages/Users/Users.jsx";

class App extends Component {
    render() {
        return (
        <Page>
            <Header />
            <Main>
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route path={"/articles"} component={ArticlePage} />
                    <Route path={"/comments"} component={CommentsPage} />
                    <Route path={"/users"} component={Users} />
                </Switch>
            </Main>
            <Footer />
        </Page>);
    }
}

export default App;