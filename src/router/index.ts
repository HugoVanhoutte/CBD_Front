import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    beforeEnter: (to, from, next) => {
      const isMajeur = localStorage.getItem('isMajeur');
      if (isMajeur === 'true') {
        next(); // Autoriser l'accès si l'utilisateur est majeur
      } else if (isMajeur === 'false') {
        next('/access-denied'); // Rediriger si l'utilisateur a déjà dit qu'il n'est pas majeur
      } else {
        next('/age-check'); // Rediriger vers la vérification d'âge si pas encore répondu
      }
    },
  },
  {
    path: '/access-denied',
    name: 'access-denied',
    component: () => import(/* webpackChunkName: "access-denied" */ '@/views/AccessDeniedView.vue'),
  },
  {
    path: '/age-check',
    name: 'age-check',
    component: () => import('@/views/AgeCheck.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
