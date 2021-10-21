import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";
import axios from "axios";

const GET_MY = "GET_MY";

const getMy = createAction(GET_MY, (list) => ({ list }));

const initialState = {
  list: [],
};

const getMyAPI = () => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "GET",
      url: `http://13.125.174.214/view/my`,
      data: {},
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${getCookie("user_login")}`,
      },
    })
      .then((res) => {
       
        dispatch(getMy(res.data.myBoard.Pins));
        
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
        draft.list = action.payload.list;
     
      }),
  },
  initialState
);

const actionCreators = {
  getMy,
  getMyAPI,
};

export { actionCreators };
