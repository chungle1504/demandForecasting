import axios from 'axios';
// import { toast } from 'react-toastify';

const API_BASE_URL = 'http://localhost:3000';

function handleResponse(res) {
    if (!res.data) {
        return Promise.reject('Something went wrong');
    } else {
       return Promise.resolve(res.data);
    }
}


export function httpGet(route) {
    let url = `${API_BASE_URL}${route}`;
    // console.log(API_BASE_URL);
    return axios.get(url).then(handleResponse);
}

export function httpPost(route, payload) {
    let url = `${API_BASE_URL}${route}`;
    return axios.post(url, payload).then(handleResponse);
}

export function httpPut(route, payload) {
    let url = `${API_BASE_URL}${route}`;
    return axios.put(url, payload).then(handleResponse);
}
