import axios from "axios";
// const apiUrl = process.env.API_URL;
const apiUrl = 'http://127.0.0.1:3333'


export const GetItem = (page, limit) => {
    return axios.get(`${apiUrl}/api/item?page=${page}&limit=${limit}`,)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}
