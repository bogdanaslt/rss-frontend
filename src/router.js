import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "register" */ "./views/Register.vue")
    },
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "./views/Home.vue"),
      meta: {
        auth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.user) {
    store
      .dispatch("getUser")
      .then(response => {
        store.commit("setUser", response.data);
      })
      .catch(() => {
        store.commit("setUser", null);
      })
      .finally(() => {
        if (to.meta.auth && !store.state.user) {
          router.push({ name: "login" });
        }
        next();
      });
  } else {
    next();
  }
});

export default router;
