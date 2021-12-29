import axios from 'axios';
import { post, get, put } from './auth';
import { getToken } from '../utils/authentication';
const devURL = 'http://localhost:8080/api/v1';
//All API about properties

//Get all property
const API_GET_ALL_PROPERTIES = '/properties';

export const getAllProperties = async () => {
  const url = devURL + API_GET_ALL_PROPERTIES;
  const response = await axios.get(url);
  //console.log(response.data);
  return response.data;
};

//Get a property by ID
const API_GET_PROPERTIES_BY_ID = '/properties/';

export const getPropertiesById = async (Id) => {
  const url = devURL + API_GET_PROPERTIES_BY_ID + Id;
  const response = await axios.get(url);
  return response.data;
};

//Post new property
const API_POST_PROPERTY = '/properties';

export const PostProperty = async (propertyInfo) => {
  const json = JSON.stringify(propertyInfo);
  console.log(JSON.stringify(propertyInfo))
  //console.log(propertyInfo)
  const token =getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
  const res =post(`${devURL}`+API_POST_PROPERTY, json, config)
  console.log(res)
  return res //{
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
};
