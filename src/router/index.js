import Vue from "vue";
import VueRouter from "vue-router";
import routes from "../../src copy/router./../src/router/routes";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "active",
});

export default router;
