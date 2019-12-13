import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "page1",
      component: () => import("./pages/Page1")
    },
    {
      path: "/page2",
      name: "page2",
      component: () => import("./pages/Page2")
    }
  ]
});
