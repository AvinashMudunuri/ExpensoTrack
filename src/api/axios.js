import axios from 'axios';

axios.defaults.withCredentials = true;

console.log('BASE URL:', process.env.BASE_URL);

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

export default axiosInstance;
