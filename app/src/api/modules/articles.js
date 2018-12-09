import { request } from "../request.js";
import moment from "moment";

export const fetchArticles = () => {
    return request({
        url: "articles"
    }).then(response => {
        return response.data.sort((article1, article2) => {
            return moment.utc(article1.addedDate).isAfter(moment.utc(article2.addedDate)) ? -1 : 1;
        })
    })
};

export const addArticle = articleData => {
    return request({
        method: "post",
        url: "add_article",
        data: articleData
    }).then(response => response.data)
};