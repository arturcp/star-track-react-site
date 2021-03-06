import axios from 'axios';

// eslint-disable-next-line no-undef
const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export default api;
