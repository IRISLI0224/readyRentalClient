//All API about properties
import backendApi from '../api/backendApi';
import { getToken } from '../utils/authentication';

//Get all property
//todo: need to delete one
const API_GET_PROPERTIES_ADS = '/propertiesads';
const API_PROPERTIES = '/properties';

export const getAllProperties = async () => {
  const url = API_PROPERTIES;
  const response = await backendApi.get(url);
  return response.data;
};

export const getPropertiesById = async (id) => {
  const url = `${API_PROPERTIES}/${id}`;
  const response = await backendApi.get(url);
  return response.data;
};

//get property ads
export const getPropertiesAds = async () => {
  const url = API_GET_PROPERTIES_ADS;
  const response = await backendApi.get(url);
  return response.data;
};

//Post new property
export const PostProperty = async (propertyInfo) => {
  try {
    var decycle = require('json-decycle').decycle;
    const json_str = JSON.stringify(propertyInfo, decycle());
    const token = getToken();
    const config = {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    };
    const res = backendApi.post(API_PROPERTIES, json_str, config);
    console.log(res);
    return res;
  } catch (e) {
    return;
  }
};

export const getPropertiesBySearch = async (search) => {
  const url = `${API_PROPERTIES}${search}`;
  const response = await backendApi.get(url);
  return response.data;
};

//get property counts of 7 cities
const GET_COUNT_CITIES = `property/citycount`;
export const getPropertiesCountbyCity = async () => {
  const url = GET_COUNT_CITIES;
  const response = await backendApi.get(url);
  return response.data;
};

//Delete property by id
export const deletePropertyById = async (propertyId) => {
  const token = getToken();
  const config = {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  };
  const url = `${API_PROPERTIES}/${propertyId}`;
  const response = await backendApi.delete(url, config);
  return response.data;
};

//update property by id
export const updatePropertyById = async (id, data) => {
  const json = JSON.stringify(data);
  const token = getToken();
  const config = {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  };
  const response = await backendApi.put(`${API_PROPERTIES}/${id}`, json, config);
  return response.data;
};
