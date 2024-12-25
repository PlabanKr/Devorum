import axios from 'axios';

const url = import.meta.env.VITE_SERVER_URL;

const api = axios.create({
  baseURL: 'https://devorum-backend-7ngp.onrender.com/api/v1',
});

export default api;