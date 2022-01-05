//All API about properties

import axios from 'axios';
import { post, get, put } from './auth';
import { getToken } from '../utils/authentication';
const devURL = 'http://localhost:8080/api/v1';

//Get all property
//todo: need to delete one
const API_GET_ALL_PROPERTIES = '/properties';
const API_GET_PROPERTIES_BY_ID = '/properties/';

export const getAllProperties = async () => {
  const url = devURL + API_GET_ALL_PROPERTIES;
  const response = await axios.get(url);
  return response.data;
};

export const getPropertiesById = async (Id) => {
  const url = devURL + API_GET_PROPERTIES_BY_ID + Id;
  const response = await axios.get(url);
  return response.data;
};

//Post new property
const API_POST_PROPERTY = '/properties';

export const PostProperty = async (propertyInfo) => {
  const json = JSON.stringify(propertyInfo);
  const token = getToken();
  const config = {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  };
  const res = axios.post(`${devURL}` + API_POST_PROPERTY, json, config);
  return res;
};

export const getPropertiesBySearch = async (search) => {
  const url = `http://localhost:8080/api/v1/properties${search}`;
  const response = await axios.get(url);
  return response.data;
};

//Delete property by id
export const deletePropertyById = async (propertyId) => {
  const token = getToken();
  const config = {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  };
  const url = `${devURL}${API_GET_ALL_PROPERTIES}/${propertyId}`;
  const response = await axios.delete(url, config);
  return response.data;
};

//update property by id

export const updatePropertyById = async (propertyInfo, propertyId) => {
  const json = JSON.stringify(propertyInfo);
  const token = getToken();
  const config = {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  };
  const response = await axios.put(
    `${devURL}${API_GET_ALL_PROPERTIES}/${propertyId}`,
    json,
    config,
  );
  return response.data;
};
