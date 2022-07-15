import type { StoreDefinition } from "pinia";
import { defineStore } from "pinia";

export const store: StoreDefinition = defineStore<
  string,
  { name: string },
  { setName: () => void }
>({
  id: "user",
  state: () => {
    return {
      name: "张三",
    };
  },
  actions: {
    setName(value: string) {
      this.name = value;
    },
  },
});
