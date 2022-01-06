import axios from 'axios';
import { getToken } from '../utils/authentication';

axios.defaults.baseURL = `http://3.26.189.227:8000/api/v1/`;

const appendAuthToken = (config) => {
  const jwtToken = getToken();
  //console.log("token," +jwtToken)
  const Authorization = jwtToken && `Bearer ${jwtToken}`;
  return { ...config,   headers: { Authorization: `Bearer ${jwtToken}` } };
};


//functions need to use token
export const post = (url, data, config = {}) => axios.post(url, data, appendAuthToken(config));

export const put = (url, data, config = {}) => axios.put(url, data, appendAuthToken(config));

export const get = (url, config = {}) => axios.get(url, appendAuthToken(config));
