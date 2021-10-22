import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";
const DET_COMMENTS = "DET_COMMENTS";
const GET_COMMENTS = "GET_COMMENTS";
const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const TOGGLE_LIKE = "TOGGLE_LIKE";

const getComment = createAction(GET_COMMENTS, (comments) => ({ comments}));
const getDomment = createAction(DET_COMMENTS, (list) => ({ list}));
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
const toggleLike = createAction(TOGGLE_LIKE, (commentId, commentLike) => ({
    commentId,
    commentLike,
}));

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
    list: [],
};

const getCommentAPI = (id) => {
    return (dispatch, getState, { history }) => {
        // apis.getComment(id)
        axios({
            method: "GET",
            url: `http://3.35.219.78/comment/${id}`,
            data: { id },
            headers: {
                "content-type": "application/json;charset=UTF-8",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                authorization: `Bearer ${getCookie("user_login")}`,
            },
        })
            .then((res) => {
                console.log(res.data);
                const comments = res.data.comments;
                const list = [];
                for (let i=0;i<comments.length;i++)
                {
                    list[i]=res.data.comments[i].User.nickname;
                }
                console.log(list)
                dispatch(getDomment(list));
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
            url: `http://3.35.219.78/comment`,
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
            url: `http://3.35.219.78/comment/${id}`,
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
            url: `http://3.35.219.78/comment/${id}`,
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
            url: `http://3.35.219.78/comment/like/${id}`,
            data: {},
            headers: {
                "content-type": "application/json;charset=UTF-8",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                authorization: `Bearer ${getCookie("user_login")}`,
            },
        })
            .then((res) => {
                let commentLike = res.data.likeNum ? 1 : -1;
                console.log(commentLike);
                dispatch(toggleLike(id, commentLike));
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
            [DET_COMMENTS]: (state, action) =>
            produce(state, (draft) => {
                draft.list = action.payload.list;
               
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
                draft.comments[commentIdx].likeNum +=
                    action.payload.commentLike;
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
    getDomment,
};

export { actionCreators };
