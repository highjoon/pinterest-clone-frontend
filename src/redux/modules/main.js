import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";
import axios from "axios";

const GET_MAIN = "GET_MAIN";

const getMain = createAction(GET_MAIN, (list) => ({ list }));

const initialState = {
    list: [],
};

const getMainAPI = () => {
    return function (dispatch, getState, { history }) {
        axios({
            method: "GET",
            url: `http://3.35.219.78/view/main`,
            data: {},
            headers: {
                "content-type": "application/json;charset=UTF-8",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                authorization: `Bearer ${getCookie("user_login")}`,
            },
        })
            .then((res) => {
                dispatch(getMain(res.data.pins));
            })
            .catch((err) => {
                window.alert("잘못된 정보입니다");
                history.push("/");
                console.log(err);
            });
    };
};

export default handleActions(
    {
        [GET_MAIN]: (state, action) =>
            produce(state, (draft) => {
                draft.list = action.payload.list;
            }),
    },
    initialState
);

const actionCreators = { getMain, getMainAPI };

export { actionCreators };
