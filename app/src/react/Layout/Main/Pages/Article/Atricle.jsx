import React from "react";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { withRouter } from "react-router-dom";

import "../../../../../style.scss";

const Article = props => {
    const { history, article } = props;
    return (
        <article className="main-article" id={article.id}>
            <h3 className="main-article-caption">{article.caption}</h3>
            <div className="main-article-info">
                <span className="main-article-info-author">{article.author}</span>
                <span className="main-article-info-date">{moment
                    .utc(article.addedDate)
                    .local()
                    .format("DD.MM.YYYY HH:mm:ss")}</span>
            </div>
            <img src={props.src} alt={props.alt} className="main-article-img" />
            <p className="main-article-text">{article.text}</p>
            <Button
                variant="contained"
                color="primary" className="main-article-button"
                onClick={() => {
                    history.push(`/articles/${article.id}`)
                }}
            >
                Read &amp; Comment
        </Button>
        </article>
    )
};

export default withRouter(Article);