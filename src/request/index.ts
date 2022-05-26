import axios, { AxiosResponse, Method } from "axios";
axios.interceptors.request.use((config) => {});
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response.data);
  },
  () => {}
);

interface IParams<T> {
  url: string;
  method: Method;
  data?: T;
  params?: T;
}

const request = <T, R>(params: IParams<T>) => {
  return axios({
    ...params,
  });
};

request({
  url: "/menu/create",
  method: "POST",
  data: { id: 123 },
}).then((res) => {});
export default request;
