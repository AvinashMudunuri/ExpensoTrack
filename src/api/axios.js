import axios from 'axios';

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

export default axiosInstance;
