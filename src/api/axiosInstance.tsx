import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/resource/`,
  headers: {
    Authorization: `token ${process.env.REACT_APP_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
