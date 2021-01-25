import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_USER } from '../actions/loginUser';

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    errors: {},
    success: false,
    isError: false
  }
const loginUserReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case LOGIN_USER:
            return {
                ...state,
                ...payload,
                isAuthenticated: false,
                loading: true,
                errors: {}
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                errors: {},
                success: true
            }
        case LOGIN_ERROR:
            return {
                ...state,
                ...payload,
                isAuthenticated: false,
                loading: false,
                isError: true
            }
        default:
            return state
    }
}

export default loginUserReducer
