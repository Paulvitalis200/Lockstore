import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_USER, SET_CURRENT_USER } from '../actions/loginUser';

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    errors: {},
    success: false,
    isError: false
  }
  
const isEmpty = require('is-empty')
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
                isError: false,
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
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(payload),
                user: payload,
                loading: true
              }
        default:
            return state
    }
}

export default loginUserReducer
