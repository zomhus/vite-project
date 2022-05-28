import { IQueryResult, IResponse } from "../../../interfaces";
import request from "../../../request";
import { IUserTableRow } from "../interface";

export const list = () => {
  return request<unknown, IResponse<IQueryResult<IUserTableRow>>>({
    method: "GET",
    url: "/api/user",
  });
};
