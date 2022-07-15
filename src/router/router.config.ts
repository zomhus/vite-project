import type { RouteRecordRaw } from 'vue-router';
import House from '../views/adminHouse/index.vue';
import User from '../views/adminUser/index.vue';
import Menu from '../views/adminMenu/index.vue';
import Regist from '../views/regist/index.vue';
import Login from '../views/login/index.vue';
import Layout from '../layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/regist',
    component: Regist,
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/user',
        component: User,
      },
      {
        path: '/menu',
        component: Menu,
      },
      {
        path: '/house',
        component: House,
      },
    ],
  },
];

export default routes;
