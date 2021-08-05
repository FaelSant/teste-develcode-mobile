import axios from 'axios';
const api = axios.create({
  //baseURL: 'http://www.icontroler.com.br:3335/',
  // baseURL: 'http://192.168.0.36:3335/',
  // baseURL: 'http://192.168.0.6:3336',
  baseURL: 'http://192.168.0.11:3000',
});

export default api;
