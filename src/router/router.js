import { createRouter, createWebHistory } from "vue-router";
const landingPage = () => import("../pages/landing_page.vue");

export default createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "Home", component: landingPage }],
});
