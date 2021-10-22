import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";
import axios from "axios";

const ADD_PIN = "ADD_PIN";

const addPin = createAction(ADD_PIN, (pin) => ({ pin }));

const initialState = {
    pin: [],
};

const addPinAPI = (formdata) => {
    return function (dispatch, getState, { history }) {
        axios({
            method: "POST",
            url: "http://3.35.219.78/pin/1",
            headers: {
                "Content-Type": "multipart/form-data; ",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                authorization: `Bearer ${getCookie("user_login")}`,
            },
            data: formdata,
        })
            .then((res) => {
                dispatch(
                    addPin({
                        formdata,
                    })
                );
                window.alert("핀 등록 완료!");
                history.push("/main");
            })
            .catch((err) => {
                window.alert("핀 등록 실패");
                console.log(err);
            });
    };
};

export default handleActions(
    {
        [ADD_PIN]: (state, action) =>
            produce(state, (draft) => {
                draft.pin = action.payload.pin;
            }),
    },
    initialState
);

const actionCreators = {
    addPin,
    addPinAPI,
};
export { actionCreators };
