import axios from 'axios';

const token = localStorage.getItem('token');
const headers = token ? { authorization: `Bearer ${token}` } : {};
const instance = axios.create({
  timeout: 5000,
  headers
});

export default instance;
