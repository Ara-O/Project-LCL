import { createRouter, createWebHistory } from "vue-router";
const landingPage = () => import("../pages/landing_page.vue");
const userDashboard = () => import("../pages/user_dashboard.vue");
const notFoundPage = () => import("../pages/page_not_found.vue");
import useStore from "../store/store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: landingPage },
    { path: "/UserDashboard", name: "Dashboard", component: userDashboard },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: notFoundPage },
  ],
});

router.beforeEach(async (to, from) => {
  const store = useStore();

  if (
    to.path === "/UserDashboard" &&
    from.path === "/" &&
    !store.userIsLoggedIn
  ) {
    console.log("You aint logged in buck");
    router.push("/");
  }
  console.log("TO: ", to);
  console.log("FROM", from);
  console.log(store.userIsLoggedIn);

  // if (
  //   // make sure the user is authenticated
  //   !isAuthenticated &&
  //   // ❗️ Avoid an infinite redirect
  //   to.name !== "Home"
  // ) {
  //   // redirect the user to the login page
  //   return { name: "Login" };
  // }
});

export default router;
