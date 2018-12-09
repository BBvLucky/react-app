import React, { Component } from "react";
import Comments from "../../Comments/Comments.jsx";
// import Article from "../Article/Atricle.jsx";
import { connect } from "react-redux";
import { getArticleById } from "../../../../../redux/modules/articles.js";
import moment from "moment";


class ArticlesFull extends Component {
    render() {
        const { article } = this.props;
        return (
            <section>
                {!!article ? (
                    <section>
                        <article className="main-article" id={article.id}>
                            <h3 className="main-article-caption">{article.caption}</h3>
                            <div className="main-article-info">
                                <span className="main-article-info-author">{article.author}</span>
                                <span className="main-article-info-date">{moment
                                    .utc(article.addedDate)
                                    .local()
                                    .format("DD.MM.YYYY HH:mm:ss")}</span>
                            </div>
                            <img src={article.src} alt={article.alt} className="main-article-img" />
                            <p className="main-article-text extended">{article.text}</p>
                        </article>
                        <Comments />
                    </section>
                ) : (<h3 className="main-article-caption">404 not found</h3>)}
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const articleId =
        ownProps.match && ownProps.match.params && ownProps.match.params.articleId
            ? ownProps.match.params.articleId
            : undefined;
    return {
        article: getArticleById(state, articleId)
    }
}

export default connect(mapStateToProps)(ArticlesFull);