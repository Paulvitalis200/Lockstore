import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'

export const LOGIN_USER = "LOGIN_USER"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const SET_CURRENT_USER = "SET_CURRENT_USER"

const loginUser = data => dispatch => {
    console.log("Dispatch data: ", data)
    dispatch({type: LOGIN_USER}, data)
    axios.post('https://storemanagerapi2.herokuapp.com/api/v2/auth/login', data)
    .then(res => {
        console.log(res)
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
        const { access_token, role, username } = res.data
        localStorage.setItem("jwtToken", access_token)
        localStorage.setItem('role', role);
        localStorage.setItem('username', username);
    })
    .catch((error) => {
        dispatch({ type: LOGIN_ERROR, payload: error.response.data })
        console.log("Error: ", error)
    })
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken')
    // Remove auth header for future requests
    setAuthToken(false)
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}))
  }

export default loginUser;