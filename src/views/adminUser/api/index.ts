import type { IQueryResult, IResponse } from '../../../interfaces';
import request from '../../../request';
import type { IUserTableRow } from '../interface';

export const list = () => request<unknown, IResponse<IQueryResult<IUserTableRow>>>({
  method: 'GET',
  url: '/api/user',
});
