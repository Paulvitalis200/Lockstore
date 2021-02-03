import axios from 'axios'

const setAuthToken = token => {
    if (token) {
        // Apply authorization token to every request if logged in
        axios.defaults.headers.common['Authorization'] = token
    } else {
        // Delete auth token
        delete axios.defaults.headers.common['Authorization']
    }
}

export const getAccessToken = () => localStorage.getItem("token")

export default setAuthToken;