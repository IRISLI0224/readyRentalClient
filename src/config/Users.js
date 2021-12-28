//All API about user
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';
const API_GET_USER = '/users/';

export const getUserById = async (id) => {
  const url = BASE_URL + API_GET_USER + id;
  const response = await axios.get(url);
  return response.data;
};
