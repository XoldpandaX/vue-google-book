import axios from 'axios';
import configuration from './config';
import { reqSuccess, reqError } from './interceptor-req';

const request = axios.create({
  baseURL: configuration.authServerURI,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(
  (config) => reqSuccess(config, configuration.apiKey),
  (e) => reqError(e),
);

export default request;
