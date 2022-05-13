const level = 0;
export function getDeep(target: object, l = 0) {
  Object.values(target).forEach((item) => {
    if (typeof item === "object") {
      getDeep(item, ++l);
    } else {
      console.log(l);
      // console.log()
    }
  });
}

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
