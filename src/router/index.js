import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage";
import FaqPage from "@/pages/FaqPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/faq",
    name: "faq",
    component: FaqPage
  },
];

const router = createRouter({
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  history: createWebHistory(),
  routes,
});

export default router;
