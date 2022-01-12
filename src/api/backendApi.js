import axios from 'axios';

const localURL = 'http://localhost:8080/api/v1';

const backendApi = axios.create({
  baseURL: localURL,
});

export default backendApi;
