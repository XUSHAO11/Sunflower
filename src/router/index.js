import { createRouter, createWebHistory } from "vue-router";
const Layout = () => import("../layout/index.vue");
const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home.vue"),
      },
      {
        path: "/About",
        name: "about",
        component: () => import("../views/about.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
