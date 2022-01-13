import axios from 'axios';

// const baseURL =
//   process.env.NODE_ENV === 'development'
//     ? 'http://localhost:8080/api/v1'
//     : 'http://3.26.189.227:8000/api/v1';

// const localURL = 'http://localhost:8080/api/v1';
const productionURL = 'http://3.26.189.227:8000/api/v1';

const backendApi = axios.create({
  baseURL: productionURL,
});

export default backendApi;
