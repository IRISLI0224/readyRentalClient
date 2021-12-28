import axios from 'axios';
//All API about properties

const API_GET_ALL_PROPERTIES = '/properties';

export const getAllProperties = async () => {
  const url = `http://localhost:8080/api/v1` + API_GET_ALL_PROPERTIES;
  const response = await axios.get(url);
  return response.data;
};

const API_GET_PROPERTIES_BY_ID = '/properties/';

export const getPropertiesById = async (Id) => {
  const url = `http://localhost:8080/api/v1` + API_GET_PROPERTIES_BY_ID + Id;
  const response = await axios.get(url);
  return response.data;
};
