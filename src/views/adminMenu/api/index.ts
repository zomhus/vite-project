import { IResponse } from "../../../interfaces";
import request from "../../../request";
import {
  ICreateMenuForm,
  IMenuTableRow,
  IQueryMenuCondition,
} from "../interface";

export const add = (data: ICreateMenuForm) => {
  return request<ICreateMenuForm, IResponse<ICreateMenuForm>>({
    method: "POST",
    url: "/api/menu/create",
    data,
  });
};

export const list = <T extends IQueryMenuCondition>(params: T) => {
  return request<T, IResponse<IMenuTableRow>>({
    method: "GET",
    url: "/api/menu/list",
    params,
  });
};
