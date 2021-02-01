import axios from "axios";

export const LOGIN_USER = "LOGIN_USER"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"



const loginUser = data => dispatch => {
    dispatch({type: LOGIN_USER})
    axios
    .post('https://storemanagerapi2.herokuapp.com/api/v2/auth/login', data)
    .then(res => {
        console.log(res)
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
    })
    .catch((error) => {
        dispatch({type: LOGIN_ERROR, payload: error.response.data})
        console.log("Error: ", error)
    })
}

export default loginUser;