import  { combineReducers } from "redux";
import comments from "./modules/comments";
import articles from "./modules/articles";

export default combineReducers({
    comments,
    articles
})