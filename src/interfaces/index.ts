import { Method } from "axios";
import { FormInstance } from "element-plus";

// 提交表单基础数据格式
export interface IModalFormInstance<T> {
  form: FormInstance;
  data: T;
}

//后端返回数据格式
export interface IResponse<T> {
  statusCode: number;
  data: T;
  message: string;
}

// 请求参数数据格式
export interface IParams<T> {
  url: string;
  method: Method;
  data?: T;
  params?: T;
}

//请求参数转换
export interface ITransformData {
  [key: string]: string;
}
