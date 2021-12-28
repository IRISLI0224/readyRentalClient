import jwt from 'jsonwebtoken';

const JWT_TOKEN_NAME = 'buggodie-ready-to-rent';
const USER_EMAIL = 'email';
const cookie = document.cookie;

export const getToken = () => cookie.getItem(JWT_TOKEN_NAME);
export const getUserEmail = () => cookie.getItem(USER_EMAIL);

export const setToken = (token) => cookie.setItem(JWT_TOKEN_NAME, token);
export const setUserEmail = (email) => cookie.setItem(USER_EMAIL, email);

export const removeToken = () => cookie.removeItem(JWT_TOKEN_NAME);
export const removeUserEmail = () => cookie.removeItem(USER_EMAIL);

export const isLoggedIn = () => {
  const token = cookie.getItem(JWT_TOKEN_NAME);
  if (!token) return false;

  const decodedToken = jwt.decode(token);
  const expirationTime = decodedToken.exp * 1000;
  const isExpired = Date.now() - expirationTime > 0;
  return !isExpired;
};
