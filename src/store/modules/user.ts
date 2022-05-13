import { defineStore, StoreDefinition } from "pinia";

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

console.log(import.meta);
