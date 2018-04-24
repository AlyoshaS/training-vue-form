import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/features/HelloWorld';
import EveAuth from '@/features/auth/main';
import SignIn from '@/features/auth/sign-in';
import SignUp from '@/features/auth/sign-up';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'main',
      component: EveAuth,
    },
    {
      path: '/',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/',
      name: 'sign-up',
      component: SignUp,
    },
  ],
});
