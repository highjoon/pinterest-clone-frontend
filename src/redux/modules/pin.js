import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const GET_PIN = "GET_PIN";

const getPin = createAction(GET_PIN, (pinDetail) => ({ pinDetail }));

const initialState = {
    pinDetail: {
        id: 1,
        imgURL: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2014/11/img196.jpg",
        title: "테스트 제목입니다.",
        desc: "테스트 설명입니다.",
        webSite: "https://www.naver.com/",
        user: "테스트 유저",
        board: 1,
    },
};

const getPinAPI = (id) => {
    return (dispatch, getState, { history }) => {
        apis.getPin(id)
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
        [GET_PIN]: (state, action) =>
            produce(state, (draft) => {
                draft.pinDetail = action.payload.pinDetail;
            }),
    },
    initialState
);

const actionCreators = { getPin, getPinAPI };

export { actionCreators };
