import axios from 'axios';

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: process.env.baseURL,
});

export default axiosInstance;
