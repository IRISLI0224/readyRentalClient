//All API about user
import axios from 'axios';
import { post } from './auth';

const BASE_URL = 'http://localhost:8080/api/v1';
const API_GET_USER = '/users/';
const API_LOGIN_URL = '/login';

export const getUserById = async (id) => {
  const url = BASE_URL + API_GET_USER + id;
  const response = await axios.get(url);
  return response.data;
};

export const UserLogin = (email, password) => {
  const data = {
    email,
    password,
  };
  return post(API_LOGIN_URL, data).then((res) => res.data);
};

//export const signUp = (data) => data;
const API_REGISTER_URL = '/register';
export const UserRegister = async (email, password) => {
  const data = {
    email,
    password,
  };

  const res = await axios.post(API_REGISTER_URL, data).catch(function (e) {
    if (e.response) {
      return e.response;
    }
  });
  return res;
};
