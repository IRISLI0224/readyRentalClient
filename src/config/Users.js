//All API about user
import { post } from './auth';

const API_LOGIN_URL = '/login';

export const UserLogin = (email, password) => {
  const data = {
    email,
    password,
  };
  return post(API_LOGIN_URL, data).then((res) => res.data);
};

//export const signUp = (data) => data;
const API_REGISTER_URL = '/register';
export const UserRegister = (email, password) => {
  const data = {
    email,
    password,
  };
  return post(API_REGISTER_URL, data).then((res) => res.data);
};
