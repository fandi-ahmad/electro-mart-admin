import axios from "axios";
const apiUrl = 'http://127.0.0.1:3333'
const token = 'MQ.m4JtWeDxHh4DCNL0z1uTOd8Wu-WJFUV0vLVP02ISdDjMeE9WUNxMFsewmmjJ'

export const LoginUser = () => {
    return axios.post(`${apiUrl}/api/login`)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

const headers = {
    'Authorization': 'Bearer ' + token
};

export const GetItem = (page, limit) => {
    return axios.get(`${apiUrl}/api/item?page=${page}&limit=${limit}`, {headers})
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}
