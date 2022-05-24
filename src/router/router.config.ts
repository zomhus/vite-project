import House from "../views/adminHouse/index.vue";
import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/admin",
    component: House,
  },
];

export default routes;
