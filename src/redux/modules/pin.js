import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const GET_PIN = "GET_PIN";

const GET_ZAPPIN = "GET_ZAPPIN";

const getPin = createAction(GET_PIN, (pinDetail) => ({ pinDetail }));
const getZapPin = createAction(GET_ZAPPIN,(pin)=>({pin}))
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
    pin: [],
};

export default handleActions(
    {
        [GET_PIN]: (state, action) =>
            produce(state, (draft) => {
                draft.pinDetail = action.payload.pinDetail;
            }),
            [GET_ZAPPIN]: (state, action) =>
            produce(state, (draft) => {
                draft.pin = action.payload.pin;
            }),
    },
    initialState
);

const actionCreators = { getPin,getZapPin };

export { actionCreators };
