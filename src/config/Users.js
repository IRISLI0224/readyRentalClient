//All API about user
import backendApi from '../api/backendApi';
import { post } from './auth';

const API_GET_USER = '/users';
const API_LOGIN_URL = '/login';
const API_REGISTER_URL = '/register';

export const getUserById = async (id) => {
  const url = `${API_GET_USER}/${id}`;
  const response = await backendApi.get(url);
  return response.data;
};

export const UserLogin = (email, password) => {
  const data = {
    email,
    password,
  };
  return post(API_LOGIN_URL, data).then((res) => res.data);
};

export const UserRegister = (email, password) => {
  const data = {
    email,
    password,
  };
  return post(API_REGISTER_URL, data).then((res) => res.data);
};
