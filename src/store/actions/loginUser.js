import axios from "axios";
import jwtDecode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

export const LOGIN_USER = "LOGIN_USER"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const SET_CURRENT_USER = "SET_CURRENT_USER"



const loginUser = data => dispatch => {
    dispatch({type: LOGIN_USER})
    axios
    .post('https://storemanagerapi2.herokuapp.com/api/v2/auth/login', data)
    .then(res => {
        console.log(res)
        const { access_token, role, username } = res.data;
        dispatch({type: LOGIN_SUCCESS, payload: res.data})

        // Set auth token to auth header
        setAuthToken(access_token)
        
        // Decode token to get user data
        const decoded = jwtDecode(access_token)

        // Set current user
        dispatch(setCurrentUser(decoded))
        localStorage.setItem('jwtToken', access_token)
        localStorage.setItem('role', role)
        localStorage.setItem('username', username);
    })
    .catch((error) => {
        dispatch({type: LOGIN_ERROR, payload: error.response.data})
        console.log("Error: ", error)
    })
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export default loginUser;