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

export const getAccessToken = () => localStorage.getItem("jwtToken")

export const api = axios.create({
    baseURL: 'https://storemanagerapi2.herokuapp.com/api/v2/',
    headers: getAccessToken() ? {
      Authorization: `Bearer  ${getAccessToken()}`,
    } : {},
});
  

export default setAuthToken;