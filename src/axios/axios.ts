import axios from 'axios';

export const axiosClassic = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

instance.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token');
  console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
