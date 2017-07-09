import axios from 'axios';

export const FECTH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=asdfghjkl';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    return {
        type: FECTH_POSTS,
        payload: request
    };
}