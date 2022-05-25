import House from "../views/adminHouse/index.vue";
import User from "../views/adminUser/index.vue";
import Menu from "../views/adminMenu/index.vue";
import App from "../App.vue";
import { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: App,
    children: [
      {
        path: "/user",
        component: User,
      },
      {
        path: "/menu",
        component: Menu,
      },
      {
        path: "/house",
        component: House,
      },
    ],
  },
];

export default routes;
