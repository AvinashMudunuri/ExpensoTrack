import { useMutation } from 'react-query';
import axiosInstance from '../api/axios';

export const useFetchData = ({
  method = 'GET',
  endpoint,
  payload = null,
  config = {},
}) => {
  const mutation = useMutation(async () => {
    let headers = {
      'Content-Type': 'application/json',
    };
    const token = localStorage.getItem('token');
    if (token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }

    let options = {
      headers,
      method: method || 'GET',
      url: endpoint,
      ...config,
    };

    if (payload) {
      options = {
        ...options,
        data: payload,
      };
    }

    const response = await axiosInstance(options);
    return response.data;
  });
  return mutation;
};
