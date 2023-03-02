import axios from "axios";
import { getLocalData } from "../../utils/localStorage";
import * as types from "./actionTypes"


export const register = (payload) => (dispatch) =>{
    dispatch({type: types.REGISTER_REQUEST});
    return axios
      .post("https://roshan-login-signin.herokuapp.com/register", payload)
      .then((r)=> {
        dispatch({type: types.REGISTER_SUCCESS, payload: r.data});
        console.log(r.data)
        return types.REGISTER_SUCCESS;
      })
      .catch((e)=> {
        dispatch({type: types.REGISTER_FAILURE,payload: e})
        return types.REGISTER_FAILURE
      })
}


export const login = (payload) => (dispatch) =>{
    dispatch({type: types.LOGIN_REQUEST});
    return axios
      .post("https://roshan-login-signin.herokuapp.com/login", payload)
      .then((r)=> {
        dispatch({type: types.LOGIN_SUCCESS, payload: r.data});
       
        return types.LOGIN_SUCCESS;
      })
      .catch((e)=> {
        dispatch({type: types.LOGIN_FAILURE,payload: e})
        return types.LOGIN_FAILURE
      })
}

export const logoutSuccess = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_SUCCESS });
};

let token = getLocalData("token");


export const getUserDetails = (payload) => (dispatch) => {
  dispatch({ type: types.GET_USER_DETAILS_REQUEST });

  return axios
    .get(`https://syncthreadsbackend.herokuapp.com/findUser/${payload}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      dispatch({ type: types.GET_USER_DETAILS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USER_DETAILS_FAILURE });
    });
};