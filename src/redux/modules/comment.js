import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_COMMENTS = "GET_COMMENTS";
const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const ADD_LIKE = "ADD_LIKE";
const REMOVE_LIKE = "REMOVE_LIKE";

const getComment = createAction(GET_COMMENTS, () => ({}));
const addComment = createAction(ADD_COMMENT, (comment) => ({
    comment,
}));
const editComment = createAction(EDIT_COMMENT, (comment, commentId) => ({
    comment,
    commentId,
}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
    commentId,
}));
const addLike = createAction(ADD_LIKE, (commentId) => ({ commentId }));
const removeLike = createAction(REMOVE_LIKE, (commentId) => ({ commentId }));

const initialState = {
    comments: [
        {
            id: 1,
            content: "테스트 댓글",
            likeNum: 0,
            user: "테스트 유저",
            pin: 1,
        },
        {
            id: 2,
            content: "테스트 댓글 2",
            likeNum: 0,
            user: "테스트 유저 2",
            pin: 1,
        },
    ],
};

export default handleActions(
    {
        [ADD_COMMENT]: (state, action) =>
            produce(state, (draft) => {
                draft.comments.push(action.payload.comment);
            }),
        [EDIT_COMMENT]: (state, action) =>
            produce(state, (draft) => {
                let commentIdx = draft.comments.findIndex(
                    (comment) => comment.id === action.payload.commentId
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
        [ADD_LIKE]: (state, action) =>
            produce(state, (draft) => {
                let commentIdx = draft.comments.findIndex(
                    (comment) => comment.id === action.payload.commentId
                );
                draft.comments[commentIdx].likeNum += 1;
                draft.comments[commentIdx].isLike = true;
            }),
        [REMOVE_LIKE]: (state, action) =>
            produce(state, (draft) => {
                let commentIdx = draft.comments.findIndex(
                    (comment) => comment.id === action.payload.commentId
                );
                draft.comments[commentIdx].likeNum -= 1;
                draft.comments[commentIdx].isLike = false;
            }),
    },
    initialState
);

const actionCreators = {
    getComment,
    addComment,
    editComment,
    deleteComment,
    addLike,
    removeLike,
};

export { actionCreators };
