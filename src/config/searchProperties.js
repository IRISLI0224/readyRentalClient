import axios from 'axios';
import backendApi from './backendApi';

const API_SERACH_PROPERTIES = '/properties/search';

const searchProperties = async () => {
  const url = `http://localhost:8080/api/v1` + API_SERACH_PROPERTIES;
  const response = await axios.get(url);
  return response.data;
};

export default searchProperties;
