import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Chance from "chance";
import Button from "@material-ui/core/Button";
import Article from "./Atricle.jsx";

import articleImg from "../../../../../assets/img.jpg";
// import { Link } from "react-router-dom";
import {
    getArticlesList,
    getArticlesLoading,
    fetchArticles,
    addArticle
} from "../../../../../redux/modules/articles.js";

import "../../../../../style.scss";

const chanceGenerator = new Chance();

class ArticleBody extends PureComponent {
    state = {
        inputCaptionValue: "",
        inputTextValue: ""
    };

    componentDidMount() {
        this.props.fetchArticles()
    };

    updateInputTextValue = event => {
        let updatedTextInput = "";
        if (event) {
            updatedTextInput = event.target.value;
        }

        this.setState({
            inputTextValue: updatedTextInput,
        });
    };
    updateInputCaptionValue = event => {
        let updatedCaptionInput = "";
        if (event) {
            updatedCaptionInput = event.target.value;
        }

        this.setState({
            inputCaptionValue: updatedCaptionInput,
        });
    };

    submitArticle = () => {
        const { inputTextValue, inputCaptionValue } = this.state;

        if (inputTextValue.length === 0 && inputCaptionValue === 0) {
            return;
        }

        const articleData = {
            id: chanceGenerator.string({
                pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            }),
            author: chanceGenerator.name({ nationality: "en" }),
            text: inputTextValue,
            caption: inputCaptionValue
        };

        this.props.addArticle(articleData).then(() => {
            this.setState({
                inputCaptionValue: "",
                inputTextValue: ""
            });
        });
    };

    onEnter = event => {
        if (event.key === "Enter") {
            this.submitArticle();
        }
    };

    render() {
        const { inputTextValue, inputCaptionValue } = this.state;
        const { articles, loading } = this.props;
        return (
            <section className="main-articles-wrapper">
                <div className="main-articles-submit">
                    <h3 className="main-articles-submit-caption">Add an article</h3>
                    <input
                        disabled={loading}
                        className="main-articles-submit-input"
                        placeholder="Enter your caption"
                        value={inputCaptionValue}
                        onChange={this.updateInputCaptionValue}
                        onKeyPress={this.onEnter}
                    />
                    <input
                        disabled={loading}
                        className="main-articles-submit-input"
                        placeholder="Enter your text"
                        value={inputTextValue}
                        onChange={this.updateInputTextValue}
                        onKeyPress={this.onEnter}
                    />
                    <Button onClick={this.submitArticle}>Submit</Button>
                </div>
                <div className="main-articles-container">
                    {articles.length > 0
                        ? articles.map(article => (
                            <Article
                                key={article.id}
                                alt={"article-img"}
                                article={article}
                                src={articleImg}
                            >
                            </Article>
                        ))
                        : "There are no stories yet! Wrote one!"}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        articles: getArticlesList(state),
        loading: getArticlesLoading(state)
    };
};

const mapDispatchToProps = {
    fetchArticles,
    addArticle
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleBody);