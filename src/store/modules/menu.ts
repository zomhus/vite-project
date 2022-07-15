import type { StoreDefinition } from "pinia";
import { defineStore } from "pinia";

export const store: StoreDefinition = defineStore<
  string,
  { mode: string },
  { setMode: () => void }
>({
  id: "menu",
  state: () => {
    return {
      mode: "horizontal",
    };
  },
  actions: {
    setMode(value: string) {
      this.mode = value;
    },
  },
});
