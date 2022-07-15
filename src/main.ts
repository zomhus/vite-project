import { createApp } from 'vue';
import App from './App.vue';
import './utils';
import store from './store/index';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';
// import "element-plus/theme-chalk/dark/css-vars.css";
import { router } from './router/index';

const app = createApp(App);

app.use(router).use(ElementPlus).use(store).mount('#app');
