import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

const GET_PIN = "GET_PIN";
const GET_ZAPPIN = "GET_ZAPPIN";

const getPin = createAction(
    GET_PIN,
    (pinDetail, pinId, pinWriter, pinBoard) => ({
        pinDetail,
        pinId,
        pinWriter,
        pinBoard,
    })
);
const getZapPin = createAction(GET_ZAPPIN, (pin) => ({ pin }));

const initialState = {
    pinDetail: {
        id: 1,
        imgURL: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2014/11/img196.jpg",
        title: "임시 테스트 제목입니다.",
        desc: "임시 테스트 설명입니다.",
        webSite: "https://www.naver.com/",
        user: "임시 테스트 유저",
        board: "임시 테스트 보드",
    },
    pin: [],
    pinId: null,
    pinWriter: null,
    pinBoard: null,
};

const getPinAPI = (id) => {
    return (dispatch, getState, { history }) => {
        // apis.getPin(id)
        axios({
            method: "GET",
            url: `http://3.35.219.78/view/detail/${id}`,
            data: { id },
            headers: {
                "content-type": "application/json;charset=UTF-8",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                authorization: `Bearer ${getCookie("user_login")}`,
            },
        })
            .then((res) => {
                const pinDetail = res.data.pinDetail;
                const pinId = res.data.pinDetail.id;
                const pinWriter = res.data.pinDetail.User.nickname;
                const pinBoard = res.data.pinDetail.Board.boardName;
                localStorage.setItem("pinId", pinId);
                dispatch(getPin(pinDetail, pinId, pinWriter, pinBoard));
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
                draft.pinId = action.payload.pinId;
                draft.pinWriter = action.payload.pinWriter;
                draft.pinBoard = action.payload.pinBoard;
            }),
        [GET_ZAPPIN]: (state, action) =>
            produce(state, (draft) => {
                draft.pin = action.payload.pin;
            }),
    },
    initialState
);

const actionCreators = { getPinAPI, getZapPin };

export { actionCreators };
