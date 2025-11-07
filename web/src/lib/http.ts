import axios from 'axios';

export const http = axios.create({
  baseURL: '/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    // surface error in a consistent shape
    return Promise.reject(err);
  },
);

