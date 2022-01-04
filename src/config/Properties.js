//All API about properties

import axios from 'axios';
import { post, get, put } from './auth';
import { getToken } from '../utils/authentication';
const devURL = 'http://localhost:8080/api/v1';

//Get all property
const API_GET_ALL_PROPERTIES = '/properties';

export const getAllProperties = async () => {
  const url = devURL + API_GET_ALL_PROPERTIES;
  const response = await axios.get(url);
  return response.data;
};
const API_GET_PROPERTIES_BY_ID = '/properties/';

export const getPropertiesById = async (Id) => {
  const url = devURL + API_GET_PROPERTIES_BY_ID + Id;
  const response = await axios.get(url);
  return response.data;
};

//Post new property
const API_POST_PROPERTY = '/properties';

export const PostProperty = async (propertyInfo) => {
  try {
    var decycle = require('json-decycle').decycle;
    const json_str = JSON.stringify(propertyInfo, decycle());
    const token = getToken();
    const config = {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    };
    const res = axios.post(`${devURL}` + API_POST_PROPERTY, json_str, config);
    console.log(res)
    return res;
  } catch (e) {
    return;
  }
};

export const getPropertiesBySearch = async (search) => {
  const url = `http://localhost:8080/api/v1/properties${search}`;
  const response = await axios.get(url);
  return response.data;
};
