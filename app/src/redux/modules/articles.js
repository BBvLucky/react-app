import API from "../../api/index.js";

//ACTION TYPES

const FETCH_ARTICLES = "react/main/articles/FETCH_ARTICLES";
const FETCH_ARTICLES_SUCCESS = "react/main/articles/FETCH_ARTICLES_SUCCESS";
const FETCH_ARTICLES_FAIL = "react/main/articles/FETCH_ARTICLES_FAIL";

const ADD_ARTICLE = "react/main/articles/ADD_ARTICLE";
const ADD_ARTICLE_SUCCESS = "react/main/articles/ADD_ARTICLE_SUCCESS";
const ADD_ARTICLE_FAIL = "react/main/articles/ADD_ARTICLE_FAIL";

//REDUCER

const initState = {
    list: [],
    loading: false
};

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case ADD_ARTICLE:
        case FETCH_ARTICLES:
            return {
                ...state,
                loading: true
            };
        case FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.payload
            };
        case ADD_ARTICLE_FAIL:
        case FETCH_ARTICLES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case ADD_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                list: (() => {
                    const newList = state.list.slice();
                    newList.unshift(action.payload);
                    return newList;
                })()
            };
        default:
            return state;
    }
};

//SELECTORS

export const getLocalState = state => {
    return state.articles;
};

export const getArticlesList = state => {
    return getLocalState(state).list;
};

export const getArticlesLoading = state => {
    return getLocalState(state).loading;
}

export const getArticleById = (state, id) => {
    return getLocalState(state).list.find(article => article.id === id);
  };

//ACTION CREATORS

export const fetchArticles = () => {
    return dispatch => {
        dispatch({
            type: FETCH_ARTICLES
        });
        return API.articles.fetchArticles().then(articles => {
            dispatch({
                type: FETCH_ARTICLES_SUCCESS,
                payload: articles
            });
            return articles;
        }).catch((error) => {
            dispatch({
                type: FETCH_ARTICLES_FAIL,
                payload: {
                    error
                }
            });
        });
    };
};

export const addArticle = (articleData) => {
    return dispatch => {
        dispatch({
            type: ADD_ARTICLE
        });

        return API.articles.addArticle(articleData).then((articleDataResponse) => {
            dispatch({
                type: ADD_ARTICLE_SUCCESS,
                payload: articleDataResponse
            });
        }).catch((error) => {
            dispatch({
                type: ADD_ARTICLE_FAIL,
                payload: {
                    error
                }
            });
        });
    }
}

export default reducer;