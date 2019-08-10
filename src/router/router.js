import Vue from "vue";
import Router from "vue-router";
import About from "@/views/About.vue";
import Top from "@/pages/Top.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Top",
      component: Top
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
