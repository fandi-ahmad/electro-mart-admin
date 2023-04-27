import axios from "axios";
const apiUrl = 'http://127.0.0.1:3333'
const token = 'Mg.6W9D4F5lFV5PIpq-WTYANX89Z_haoQigMkFCh-r8q9Rq3lJUg1druzKW3AxM'

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

export const CreateItem = (data) => {
    return axios.post(`${apiUrl}/api/item`, data, {headers})
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

export const DeleteItem = (id) => {
    return axios.delete(`${apiUrl}/api/item/${id}`, {headers})
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}