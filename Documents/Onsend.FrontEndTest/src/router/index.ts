import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/consignments",
      name: "consignmentlist",
      component: () => import("@/views/Consignmentlist.vue"),
    },
  ],
});

// This callback runs before every route change, including on initial load
router.beforeEach((to, from, next) => {
  next();
});

export default router;
