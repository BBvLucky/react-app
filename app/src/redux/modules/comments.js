import API from "../../api/index.js";

//ACTION TYPES

const FETCH_COMMENTS = "react/main/comments/FETCH_COMMENTS";
const FETCH_COMMENTS_SUCCESS = "react/main/comments/FETCH_COMMENTS_SUCCESS";
const FETCH_COMMENTS_FAIL = "react/main/comments/FETCH_COMMENTS_FAIL";

const ADD_COMMENT = "react/main/comments/ADD_COMMENTS";
const ADD_COMMENT_SUCCESS = "react/main/comments/ADD_COMMENTS_SUCCESS";
const ADD_COMMENT_FAIL = "react/main/comments/ADD_COMMENTS_FAIL";

//REDUCER

const initState = {
    list: [],
    loading: false
};

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case ADD_COMMENT:
        case FETCH_COMMENTS:
            return {
                ...state,
                loading: true
            };
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.payload
            };
        case ADD_COMMENT_FAIL:
        case FETCH_COMMENTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case ADD_COMMENT_SUCCESS:
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
    return state.comments;
};

export const getCommentsList = state => {
    return getLocalState(state).list;
};

export const getCommentsLoading = state => {
    return getLocalState(state).loading;
}

//ACTION CREATORS

export const fetchComments = () => {
    return dispatch => {
        dispatch({
            type: FETCH_COMMENTS
        });
        return API.comments.fetchComments().then(comments => {
            dispatch({
                type: FETCH_COMMENTS_SUCCESS,
                payload: comments
            });
            return comments;
        }).catch((error) => {
            dispatch({
                type: FETCH_COMMENTS_FAIL,
                payload: {
                    error
                }
            });
        });
    };
};

export const addComment = (commentData) => {
    return dispatch => {
        dispatch({
            type: ADD_COMMENT
        });

        return API.comments.addComment(commentData).then((commentDataResponse) => {
            dispatch({
                type: ADD_COMMENT_SUCCESS,
                payload: commentDataResponse
            });
        }).catch((error) => {
            dispatch({
                type: ADD_COMMENT_FAIL,
                payload: {
                    error
                }
            });
        });
    }
}

export default reducer;