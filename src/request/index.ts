import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
import { IParams } from "../interfaces";
import { transformData } from "../utils";

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  transformData(config);
  return config;
});
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    if (data.statusCode !== 200) {
      ElMessage.error(data.message[0]);
      return Promise.reject(response);
    }
    return response;
  },
  (error) => {
    ElMessage.error("网络错误");
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
