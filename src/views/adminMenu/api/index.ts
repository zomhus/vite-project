import { IQueryResult, IResponse } from "../../../interfaces";
import request from "../../../request";
import {
  ICreateMenuForm,
  ICreateMenuFormTree,
  IMenuTableRow,
  IQueryMenuCondition,
} from "../interface";

export const add = <T extends ICreateMenuForm>(data: T) => {
  return request<T, IResponse<null>>({
    method: "POST",
    url: "/api/menu",
    data,
  });
};

export const list = <T extends IQueryMenuCondition>(params: T) => {
  return request<T, IResponse<IQueryResult<IMenuTableRow>>>({
    method: "GET",
    url: "/api/menu",
    params,
  });
};

export const getTreeApi = () => {
  return request<undefined, IResponse<ICreateMenuFormTree>>({
    method: "GET",
    url: "/api/menu/tree",
  });
};
