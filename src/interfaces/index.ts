import { FormInstance } from "element-plus";

export interface IModalFormInstance<T> {
  form: FormInstance;
  data: T;
}
