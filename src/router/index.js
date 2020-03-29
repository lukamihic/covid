import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Today',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Today.vue'),
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import(/* webpackChunkName: "about" */ '../views/Progress.vue'),
  },
  {
    path: '/advice',
    name: 'Advice',
    component: () => import(/* webpackChunkName: "about" */ '../views/Advice.vue'),
  },
  {
    path: '/questionaire',
    name: 'Questionaire',
    component: () => import(/* webpackChunkName: "about" */ '../views/Questionaire.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
