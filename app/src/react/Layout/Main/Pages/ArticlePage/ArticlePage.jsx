import React from "react";
import { Switch, Route } from "react-router-dom";
import ArticleBody from "../Article/ArticleBody.jsx";
import ArticlesFull from "./ArticlesFull.jsx";
// import Comments from "../../Comments/Comments.jsx";

export default () => (
    <Switch>
        <Route exact path={"/articles"} component={ArticleBody} />
        <Route path={"/articles/:articleId"} component={ArticlesFull} />
    </Switch>
)