import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IParams } from "../interfaces";
import { transformData } from "../utils";

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log(config);
  transformData(config);
  return config;
});
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.data);
  }
);

const request = <T, R>(params: IParams<T>): Promise<R> => {
  return new Promise((resolve, reject) => {
    axios({ ...params })
      .then((res: AxiosResponse<R>) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default request;
