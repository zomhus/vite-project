import House from "../views/adminHouse/index.vue";
import User from "../views/adminUser/index.vue";
import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: House,
    children: [
      {
        path: "/user",
        component: User,
      },
    ],
  },
];

export default routes;
