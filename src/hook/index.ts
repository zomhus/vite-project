import { reactive } from "vue";

export const useBatchUpdate = (originState: any) => {
  const target = reactive({ ...originState });
  const setTarget = (newState: any) => {};
  return [target, setTarget];
};
