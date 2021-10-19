import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
import { setCookie, deleteCookie, getCookie } from '../../shared/Cookie';

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const LOGIN_CHECK = 'LOGIN_CHECK';
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const loginCheck = createAction(LOGIN_CHECK, (cookie) => ({ cookie }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const initialState = {
  user: [],
  is_login: false,
};

const loginAPI = (username, password) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'POST',
      url: 'http://3.36.72.109/user/login',
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        // if (res.data.token != null) {
        console.log(res.data);
        
        const jwtToken = res.data[1].token;
        const _id = res.data[0].username;
        
        setCookie('user_login', jwtToken);
        localStorage.setItem('user_name', _id);
        axios.defaults.headers.common['Authorization'] = `${jwtToken}`;
        dispatch(
          logIn({
            username: username,
            password: password,
          })
        );
        window.alert('로그인 되었습니다!');
        history.push('/');
        // }
        // else {
        //   window.alert('ID를 다시 확인해주세요');
        // }
      })
      .catch((err) => {
        window.alert('아이디와 비밀번호가 맞지 않습니다')
       window.location.reload();
      });
  };
};
// const loginAPI = (username, password) => {
//   return function (dispatch, getState, { history }) {
//     axios({
//       method: 'GET',
//       url: 'http://52.79.109.55/user/login',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json;charset=UTF-8',
//         'Access-Control-Allow-Origin': '*',
//       },
//       data: {},
//     })
//       .then((res) => {
//         for (let i = 0; i < res.data.length; i++) {
//           let _id = res.data[i]['username'];
//           let _pwd = res.data[i]['password'];
//           if (id === _id && pwd === _pwd) {
//             // axios.defaults.headers.common['Authorization'] = `${jwtToken}`;
//             dispatch(
//               logIn({
//                 username: username,
//                 password: password,
//               })
//             );
//             window.alert('로그인 되었습니다!');
//             history.push('/');
//             return;
//           } else {
//             if (i == res.data.length - 1) {
//               window.alert('아이디와 비밀번호가 맞지 않습니다');
//               history.replace('/login');
//               return;
//             }
//           }
//         }
//       })
//       .catch((err) => {
//         console.log('loginAPI에서 오류 발생', err);
//       });
//   };
// };

const signupAPI = (username, password, email) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'POST',
      url: 'http://3.36.72.109/user/signup',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        username: username,
        password: password,
        email: email,
      },
    })
      .then((res) => {
        console.log(res); // signup 정보 확인
        window.alert('축하합니다');
        history.push('/login');
      })
      .catch((err) => {
        console.log('signupAPI에서 오류발생', err);
        window.alert('이미 존재하고 있는 아이디입니다');
        window.location.reload();
      });
  };
};

const IDCheckAPI = (username) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: 'POST',
      url: 'http://localhost:3001/user',
      data: {
      
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(getUser(res.data.ok));
      })
      .catch((err) => {
        console.log('IDCheckAPI에서 오류 발생', err);
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
        deleteCookie('user_login');
        localStorage.removeItem('user_name');
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
        setCookie('is_login', 'success');
        draft.user = action.payload.user;
        draft.is_login = true;
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
  IDCheckAPI,
};

export { actionCreators };