import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const SEARCH = "SEARCH";

const getSearch = createAction(SEARCH, (word) => ({ word }));

const initialState = {
    pins: [
        {
            id: 15,
            imgURL: "https://pinterestclonecoding.s3.ap-northeast-2.amazonaws.com/1634731226547.jpg",
            title: "테스트 제목",
            desc: "테스트 설명",
            user: "테스트 유저",
            board: "테스트 보드",
        },
        {
            id: 17,
            imgURL: "https://pinterestclonecoding.s3.ap-northeast-2.amazonaws.com/1634731226547.jpg",
            title: "샐러드",
            desc: "테스트 설명",
            user: "테스트 유저",
            board: "테스트 보드",
        },
    ],
};

const getSearchAPI = (word) => {
    return (dispatch, getState, { history }) => {
        apis.searchPin(word)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export default handleActions(
    {
        [SEARCH]: (state, action) =>
            produce(state, (draft) => {
                draft.pins = action.payload.pins;
            }),
    },
    initialState
);

const actionCreators = {
    getSearchAPI,
};

export { actionCreators };
