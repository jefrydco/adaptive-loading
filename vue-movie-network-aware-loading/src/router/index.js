import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

Vue.use(VueRouter);

function lazyload(view) {
  return () => import(`../views/${view}.vue`);
}

const routes = [
  {
    path: "*",
    name: "404",
    component: () => import("../components/AppNotFound.vue")
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/:movieId",
    name: "movie",
    component: lazyload("Movie")
  }
];

const router = new VueRouter({
  mode: "history",
  base: "vue-movie-network-aware-loading",
  routes
});

export default router;
