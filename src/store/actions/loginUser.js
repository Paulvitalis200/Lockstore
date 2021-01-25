export const LOGIN_USER = "LOGIN_USER"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"

const loginUser = (dispatch, data) => {
    dispatch({type: LOGIN_USER})
    fetch('https://storemanagerapi2.herokuapp.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
    })
    .catch((error) => {
        dispatch({type: LOGIN_ERROR, payload: error})
        console.log("Error: ", error)
    })
}

export default loginUser;