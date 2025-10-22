import axios from "axios";

import { BASE_URL } from '../constants';

const client = axios.create({ baseURL: BASE_URL });

const makeRequest = async (url, method = 'get', data = null) => {
    let config = {
        url,
        method,
    }
    if (method === 'post' && data) {
        config.data = data;
    }

    const response = await client(config);
    return response.data;
}

export const getData = url => makeRequest(url);
export const postData = (url, data) => makeRequest(url, 'post', data);