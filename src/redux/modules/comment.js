import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

const GET_COMMENTS = "GET_COMMENTS";
const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const TOGGLE_LIKE = "TOGGLE_LIKE";

const getComment = createAction(GET_COMMENTS, (comments) => ({ comments }));
const addComment = createAction(ADD_COMMENT, (comments, userName, id) => ({
    comments,
    userName,
    id,
}));
const editComment = createAction(EDIT_COMMENT, (comment, commentId) => ({
    comment,
    commentId,
}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
    commentId,
}));
const toggleLike = createAction(TOGGLE_LIKE, (commentId) => ({ commentId }));

const initialState = {
    comments: [
        {
            id: 1,
            content: "임시 댓글",
            likeNum: 0,
            user: "임시 유저",
            pin: 1,
        },
        {
            id: 2,
            content: "임시 댓글 2",
            likeNum: 0,
            user: "임시 유저 2",
            pin: 1,
        },
    ],
};

const getCommentAPI = (id) => {
    return (dispatch, getState, { history }) => {
        // apis.getComment(id)
        axios({
            method: "GET",
            url: `http://13.125.174.214/comment/${id}`,
            data: { id },
            headers: {
                "content-type": "application/json;charset=UTF-8",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                authorization: `Bearer ${getCookie("user_login")}`,
            },
        })
            .then((res) => {
                const comments = res.data.comments;
                dispatch(getComment(comments));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const addCommentAPI = (comments) => {
    return (dispatch, getState, { history }) => {
        // apis.addComment(comments)
        axios({
            method: "POST",
            url: `http://13.125.174.214/comment`,
            data: comments,
            headers: {
                "content-type": "application/json;charset=UTF-8",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                authorization: `Bearer ${getCookie("user_login")}`,
            },
        })
            .then((res) => {
                const userName = res.data.user;
                const commentId = res.data.comment;
                dispatch(addComment(comments, userName, commentId));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const editCommentAPI = (id, comments) => {
    return (dispatch, getState, { history }) => {
        // apis.editComment(id, comments)
        axios({
            method: "PATCH",
            url: `http://13.125.174.214/comment/${id}`,
            data: comments,
            headers: {
                "content-type": "application/json;charset=UTF-8",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                authorization: `Bearer ${getCookie("user_login")}`,
            },
        })
            .then((res) => {
                dispatch(editComment(comments, id));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const deleteCommentAPI = (id) => {
    return (dispatch, getState, { history }) => {
        // apis.deleteComment(id)
        axios({
            method: "DELETE",
            url: `http://13.125.174.214/comment/${id}`,
            data: {},
            headers: {
                "content-type": "application/json;charset=UTF-8",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                authorization: `Bearer ${getCookie("user_login")}`,
            },
        })
            .then((res) => {
                dispatch(deleteComment(id));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const toggleLikeAPI = (id) => {
    return (dispatch, getState, { history }) => {
        // apis.toggleLike(id)
        axios({
            method: "POST",
            url: `http://13.125.174.214/comment/like/${id}`,
            data: {},
            headers: {
                "content-type": "application/json;charset=UTF-8",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                authorization: `Bearer ${getCookie("user_login")}`,
            },
        })
            .then((res) => {
                dispatch(toggleLike(id));
            })
            .then((err) => {
                console.log(err);
            });
    };
};

export default handleActions(
    {
        [GET_COMMENTS]: (state, action) =>
            produce(state, (draft) => {
                draft.comments = action.payload.comments;
            }),
        [ADD_COMMENT]: (state, action) =>
            produce(state, (draft) => {
                const commentObj = {
                    ...action.payload.comments,
                    id: action.payload.id,
                    likeNum: 0,
                    user: action.payload.userName,
                };
                draft.comments.push(commentObj);
            }),
        [EDIT_COMMENT]: (state, action) =>
            produce(state, (draft) => {
                let commentIdx = draft.comments.findIndex(
                    (comment) => comment.id == action.payload.commentId
                );
                draft.comments[commentIdx] = {
                    ...draft.comments[commentIdx],
                    ...action.payload.comment,
                };
            }),
        [DELETE_COMMENT]: (state, action) =>
            produce(state, (draft) => {
                draft.comments = draft.comments.filter((comment, id) => {
                    if (comment.id !== action.payload.commentId) {
                        return [...draft.comments, comment];
                    }
                });
            }),
        [TOGGLE_LIKE]: (state, action) =>
            produce(state, (draft) => {
                let commentIdx = draft.comments.findIndex(
                    (comment) => comment.id === action.payload.commentId
                );
                draft.comments[commentIdx].likeNum = draft.comments[commentIdx]
                    .likeNum
                    ? draft.comments[commentIdx].likeNum - 1
                    : draft.comments[commentIdx].likeNum + 1;
            }),
    },
    initialState
);

const actionCreators = {
    getCommentAPI,
    addCommentAPI,
    editCommentAPI,
    deleteCommentAPI,
    toggleLikeAPI,
};

export { actionCreators };
