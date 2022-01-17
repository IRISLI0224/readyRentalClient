import backendApi from '../api/backendApi';
import { getToken } from '../utils/authentication';

const appendAuthToken = (config) => {
  const jwtToken = getToken();
  return { ...config, headers: { Authorization: `Bearer ${jwtToken}` } };
};

//functions need to use token
export const post = (url, data, config = {}) => backendApi.post(url, data, appendAuthToken(config));

export const put = (url, data, config = {}) => backendApi.put(url, data, appendAuthToken(config));

export const get = (url, config = {}) => backendApi.get(url, appendAuthToken(config));
