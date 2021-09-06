import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import WorkoutsAndPractises from "@/views/WorkoutsAndPractises";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
    props: true,
  },
  {
    path: "/",
    name: "WorkoutsAndPractises",
    component: WorkoutsAndPractises,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
