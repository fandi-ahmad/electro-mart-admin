import axios from "axios";
const apiUrl = 'http://127.0.0.1:3333'

export const LoginUser = (data) => {
    return axios.post(`${apiUrl}/api/login`, data)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

