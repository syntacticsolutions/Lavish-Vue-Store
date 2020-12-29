import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Store from "../views/Store.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Store",
    component: Store
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
