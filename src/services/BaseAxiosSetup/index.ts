import axios from 'axios';
import ConstantsUtils from 'utils/ConstantsUtils';

import { getToken } from 'utils/LocalStorageUtils';

// Set config defaults when creating the instance
const BaseAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_BASE_URL,
  headers: {
    Authorization: `Bearer ${getToken(ConstantsUtils.NETBOOK_ACCESS_TOKEN)}`,
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

export default BaseAxiosInstance;
