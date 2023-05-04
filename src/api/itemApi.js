import axios from "axios";
const apiUrl = 'http://127.0.0.1:3333'

export const GetItem = (page, limit) => {
    const headers = { 'Authorization': localStorage.getItem('userToken') }
    return axios.get(`${apiUrl}/api/item?page=${page}&limit=${limit}`, {headers})
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

export const GetItemImage = (id) => {
    const headers = { 'Authorization': localStorage.getItem('userToken') }
    return axios.get(`${apiUrl}/api/item/image/${id}`, {headers})
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

export const CreateItem = (data) => {
    const headers = { 'Authorization': localStorage.getItem('userToken') }
    return axios.post(`${apiUrl}/api/item`, data, {headers})
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

export const UpdateItem = (id, data) => {
    const headers = { 'Authorization': localStorage.getItem('userToken') }
    return axios.patch(`${apiUrl}/api/item/${id}`, data, {headers})
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

export const DeleteItem = (id) => {
    const headers = { 'Authorization': localStorage.getItem('userToken') }
    return axios.delete(`${apiUrl}/api/item/${id}`, {headers})
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}