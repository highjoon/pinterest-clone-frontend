import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";


const GET_MAIN = "GET_MAIN";


const getMain = createAction(GET_MAIN,(list)=>({list}))


const initialState = {
   list : [ ],
};


const getMainAPI = () => {
    return function (dispatch, getState, { history }) {
      axios({
        method: 'GET',
        url: `http://13.125.174.214/view/main`,
        data: {
      
        },
      })
        .then((res) => {
        
        dispatch(getMain(res.data.pins))
         
        })
        .catch((err) => {
          console.log(err)
          
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

const actionCreators = { getMain,
    getMainAPI,

};

export { actionCreators };
