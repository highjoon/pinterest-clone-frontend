import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";
import axios from "axios";

const GET_MY = "GET_MY";

const getMy = createAction(GET_MY, (pins, nickName) => ({ pins, nickName }));

const initialState = {
    pins: [],
    nickName: null,
};

const getMyAPI = () => {
    return function (dispatch, getState, { history }) {
        axios({
            method: "GET",
            url: `http://3.35.219.78/view/my`,
            data: {},
            headers: {
                "content-type": "application/json;charset=UTF-8",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                authorization: `Bearer ${getCookie("user_login")}`,
            },
        })
            .then((res) => {
                console.log(res.data);
                const pins = res.data.myBoard.Pins;
                const nickName = res.data.myBoard.nickname;
                dispatch(getMy(pins, nickName));
            })
            .catch((err) => {
                history.push("/mypage");
            });
    };
};

export default handleActions(
    {
        [GET_MY]: (state, action) =>
            produce(state, (draft) => {
                draft.pins = action.payload.pins;
                draft.nickName = action.payload.nickName;
            }),
    },
    initialState
);

const actionCreators = {
    getMy,
    getMyAPI,
};

export { actionCreators };
