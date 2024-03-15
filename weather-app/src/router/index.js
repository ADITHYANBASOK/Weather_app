import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomePage.vue';
import SignIn from '../views/LoginPage.vue';
import SignUp from '../views/SignUpPage.vue';

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/registration',
    name: 'SignUp',
    component: SignUp
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 