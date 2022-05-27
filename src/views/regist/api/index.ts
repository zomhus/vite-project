import { IResponse } from "../../../interfaces";
import request from "../../../request";
import { ICreateUserForm } from "../interface";

export const registApi = <T extends ICreateUserForm>(data: T) => {
  return request<T, IResponse<null>>({
    method: "POST",
    url: "/api/user/regist",
    data,
  });
};
