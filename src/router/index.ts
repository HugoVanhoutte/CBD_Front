import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/age-check', // Redirige automatiquement vers la vérification d'âge
  },
  {
    path: '/access-denied',
    name: 'access-denied',
    component: () => import(/* webpackChunkName: "access-denied" */ '../views/AccessDeniedView.vue'),
  },
  {
    path: '/age-check',
    name: 'age-check',
    component: () => import('../views/AgeCheck.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
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
    component: () => import(/* webpackChunkName: "access-denied" */ '../views/AccessDeniedView.vue'),
  },
  {
    path: '/age-check',
    name: 'age-check',
    component: () => import('../views/AgeCheck.vue'),
  },
  {
    path: '/products/:category_id',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
  },
  {
    path: '/condition',
    name: 'condition',
    component: () => import('../views/ConditionUtilisation.vue'),
  },
  {
    path: '/mentions',
    name: 'mentions',
    component: () => import('../views/MentionsLegales.vue'),
  },
  {
    path: '/accord',
    name: 'accord',
    component: () => import('../views/AccordView.vue'),
  },
  {
    path: '/expedition',
    name: 'expedition',
    component: () => import('../views/ExpeditionView.vue'),
  },
  {
    path: '/conditions',
    name: 'conditions',
    component: () => import('../views/PolitiqueView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: import('../views/admin/AdminPanel.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
