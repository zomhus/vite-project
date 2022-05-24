import { createRouter, createMemoryHistory } from "vue-router";
import routes from "./router.config";

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
console.log(router);
