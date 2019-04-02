import Vue from 'vue';
import Router from 'vue-router';
import viewHome from './views/viewHome.vue';
import viewCreate from './views/viewCreate.vue';
import viewUpdate from './views/viewUpdate.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: viewHome,
    },
    {
      path: "/create",
      name: "create",
      component: viewCreate,
      props: true
    },
    {
      path: "/update",
      name: "update",
      component: viewUpdate,
      props: true
    }
  ]
})
