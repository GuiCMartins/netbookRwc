import axios from 'axios';

// Set config defaults when creating the instance
const BaseAxiosInstance = (token: string | undefined) => {
  return axios.create({
    baseURL: process.env.REACT_APP_LOCAL_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

export const BooksApiAxiosInstance = (token: string | undefined) => {
  return axios.create({
    baseURL: process.env.REACT_APP_GOOGLE_BOOKS_API_URL,
    headers: {
      //Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

export default BaseAxiosInstance;
