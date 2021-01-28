import { GET_PRODUCTS, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS } from "../actions/products"

const initialState = {
    products: {},
    isLoading: false,
    errors: {}
}

const productsReducer = (state=initialState, {type, payload}) => {
    switch(type) {
        case GET_PRODUCTS:
            return {
                ...state,
                isLoading: true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products:  payload 
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        default:
            return state
    }
}

export default productsReducer