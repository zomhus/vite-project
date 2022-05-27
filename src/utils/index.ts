import { AxiosRequestHeaders } from "axios";
import { ITransformData } from "../interfaces";

const getDataType = (target: object) => {
  return Object.prototype.toString.call(target).slice(8, -1);
};

export function deepClone(target: any) {
  if (target === null || target === undefined) {
    return undefined;
  }
  const datatype = getDataType(target);
  if (datatype === "object") {
    let copiedTarget: any = {};
    for (let key in target) {
      copiedTarget[key] = deepClone(target[key]);
    }
  }
}

// 清空数据中的为空数据
export const transformData = ({ data }: any) => {
  if (data) {
    const props = Object.keys(data);
    props.forEach((prop) => {
      if (!data[prop]) {
        delete data[prop];
      }
    });
  }
};
