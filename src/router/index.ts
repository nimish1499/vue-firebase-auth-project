import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginForm from '../components/Login/LoginForm.vue';
import Dashboard from '../components/Dashboard/Dashboard.vue';
import RegisterForm from '../components/Register/RegisterForm.vue'
import { useAuthStore } from '../store/auth';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  { path: '/register', component: RegisterForm },
  { path: '/login', component: LoginForm },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !authStore.user) {
    console.log("needs to come")
    return '/login'; // Redirects to login page if not authenticated
  }
});

export default router;
