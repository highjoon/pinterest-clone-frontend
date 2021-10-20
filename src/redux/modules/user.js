import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import {
    setCookie,
    deleteCookie,
    getCookie,
} from "../../shared/Cookie";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const LOGIN_CHECK = "LOGIN_CHECK";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const FIND_USER = "FIND_USER";
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const loginCheck = createAction(LOGIN_CHECK, (cookie) => ({
    cookie,
}));


const findUser = createAction(FIND_USER, (is_id) => ({is_id}))
const initialState = {
    user: [],
    is_login: false,
    is_id: false,
};

const loginAPI = (value) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'POST',
      url: 'http://13.125.174.214/user/login',
      data: {
        email: value.email,
        password: value.password,
      },
    })
      .then((res) => {
        // if (res.data.token != null) {
        console.log(res.data);
        
        const jwtToken = res.data.token;
        const _id = res.data.nickname;
        
        setCookie('user_login', jwtToken);
        localStorage.setItem('user_name', _id);
        axios.defaults.headers.common['Authorization'] = `${jwtToken}`;
        dispatch(
          logIn({
            email: value.email,
            password: value.password,
          })
        );
        window.alert('로그인 되었습니다!');
        history.push('/main');
        // }
        // else {
        //   window.alert('ID를 다시 확인해주세요');
        // }
      })
      .catch((err) => {
        console.log(err)
       
      });
  };
};

const loginActionAPI = (email) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'GET',
      url: `http://13.125.174.214/user/login/${email}`,
      data: {
       
      },
    })
      .then((res) => {
        // if (res.data.token != null) {
       dispatch(findUser(true));

        // }
        // else {
        //   window.alert('ID를 다시 확인해주세요');
        // }
      })
      .catch((err) => {
        dispatch(findUser(false));
       
      });
  };
};




const signupAPI = (value) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'POST',
      url: 'http://13.125.174.214/user/signup',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        email: value.email,
        password: value.password,
        age: value.age,
      },
    })
      .then((res) => {
        console.log(res); // signup 정보 확인
        window.alert('축하합니다');
        history.push('/main');
      })
      .catch((err) => {
        console.log('signupAPI에서 오류발생', err);
        window.alert(
         "오류 발생"
        )
   
      });
  };
};


export default handleActions(
    {
        [LOG_IN]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                deleteCookie("user_login");
                localStorage.removeItem("user_name");
                draft.user = null;
                draft.is_login = false;
            }),
        [LOGIN_CHECK]: (state, action) =>
            produce(state, (draft) => {
                draft.is_login = action.payload.cookie;
            }),
        [GET_USER]: (state, action) =>
            produce(state, (draft) => {
                draft.is_exist = action.payload.user;
                console.log(action.payload);
                console.log(action.payload.user);
            }),
        [SET_USER]: (state, action) =>
            produce(state, (draft) => {
                setCookie("is_login", "success");
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
            [FIND_USER]: (state, action) =>
            produce(state, (draft) => {
                draft.is_id = action.payload.is_id
            }),
    },
    initialState
);

//action creator export
const actionCreators = {
    logIn,
    logOut,
    loginCheck,
    loginAPI,
    signupAPI,
    loginActionAPI,
    findUser,
  
};

export { actionCreators };
