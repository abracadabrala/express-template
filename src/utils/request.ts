import axios from "axios";

import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from "axios";

const reqConfig = (config: InternalAxiosRequestConfig) => {
  return config;
};

const resConfig = <T>(responde: AxiosResponse<T>): T => {
  return responde.data;
};

const instance = axios.create();
instance.request = <T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig<T>): Promise<R> => {
  return axios.request<T, R>(config);
};

instance.interceptors.request.use(reqConfig, (error: AxiosError) => {
  return Promise.reject(error);
});

instance.interceptors.response.use(resConfig, (error: AxiosError) => {
  return Promise.reject(error);
});

export default instance.request;
