import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const GET_COMMENTS = "GET_COMMENTS";
const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const TOGGLE_LIKE = "TOGGLE_LIKE";

const getComment = createAction(GET_COMMENTS, (comments) => ({ comments }));
const addComment = createAction(ADD_COMMENT, (comments, userName) => ({
    comments,
    userName,
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
        apis.getComment(id)
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
        apis.addComment(comments)
            .then((res) => {
                const userName = res.data;
                dispatch(addComment(comments, userName));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const editCommentAPI = (id, comments) => {
    return (dispatch, getState, { history }) => {
        apis.editComment(id, comments)
            .then((res) => {
                dispatch(editComment(comments, id));
                window.alert("수정 완료!");
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const deleteCommentAPI = (id) => {
    return (dispatch, getState, { history }) => {
        apis.deleteComment(id)
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
        apis.toggleLike(id)
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
                draft.comments.push({
                    ...action.payload.comments,
                    ...action.payload.userName,
                });
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
