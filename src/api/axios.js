import axios from 'axios';

axios.defaults.withCredentials = true;

console.log('BASE URL:', process.env.REACT_APP_BASE_URL);

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default axiosInstance;
