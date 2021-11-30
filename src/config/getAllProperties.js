import axios from 'axios';

 const API_GET_ALL_PROPERTIES = '/properties';




const getAllProperties = async () => {
    const url = `http://localhost:8080/api/v1`+API_GET_ALL_PROPERTIES;
    const response = await axios.get(url);
    console.log(response.data[0]);
    return response.data[0];
  };
  
  export default getAllProperties;