import axios from 'axios';

const url = import.meta.env.VITE_SERVER_URL;

const api = axios.create({
  baseURL: url + '/api/v1',
});

export default api;