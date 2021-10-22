import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

const SEARCH_PINS = "SEARCH_PINS";

const getSearch = createAction(SEARCH_PINS, (pins, word) => ({ pins, word }));

const initialState = {
    pins: [],
    word: null,
};

const getSearchAPI = (word) => {
    return (dispatch, getState, { history }) => {
        // apis.searchPin(word)
        axios({
            method: "GET",
            url: `http://3.35.219.78/view/search/${word}`,
            data: { word },
            headers: {
                "content-type": "application/json;charset=UTF-8",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                authorization: `Bearer ${getCookie("user_login")}`,
            },
        })
            .then((res) => {
                const resultPins = res.data.pins;
                dispatch(getSearch(resultPins, word));
                localStorage.setItem("word", word);
                history.push(`/view/search/${encodeURIComponent(word)}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export default handleActions(
    {
        [SEARCH_PINS]: (state, action) =>
            produce(state, (draft) => {
                draft.pins = action.payload.pins;
                draft.word = action.payload.word;
            }),
    },
    initialState
);

const actionCreators = {
    getSearchAPI,
};

export { actionCreators };
