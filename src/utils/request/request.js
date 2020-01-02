import axios from 'axios';
import configuration from './config';

const request = axios.create({
  baseURL: configuration.endpoint,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default request;
