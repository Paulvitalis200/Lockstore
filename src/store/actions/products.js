import axios from 'axios'

export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR"

const getProducts = (dispatch) => {
    console.log("DOoes iit run")
    dispatch({type: GET_PRODUCTS})
    axios
    .get('https://storemanagerapi2.herokuapp.com/api/v2/products')
    .then(res => res.json())
    .then(res => {
        dispatch({type: GET_PRODUCTS_SUCCESS})
        console.log(res)
    })
    .catch(error => {
        dispatch({type: GET_PRODUCTS_ERROR})
        console.log(error)
    })
}

export default getProducts;