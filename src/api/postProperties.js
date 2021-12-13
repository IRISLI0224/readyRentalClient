import axios from 'axios';

export function storePropety(data) {
  return axios.post('url', data);
}
