import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '@/views/HomeView';
import ExploreView from '@/views/ExploreView';
import ItemView from '@/views/ItemView';
import UserView from '@/views/UserView';
import CreateItemView from '@/views/CreateItemView';
import LoginView from '@/views/LoginView';

Vue.use(Router);

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeView,
    },
    {
      name: 'Explore',
      path: '/explore',
      component: ExploreView,
    },
    {
      name: 'Item',
      path: '/item/:id(\\d+)',
      component: ItemView,
    },
    {
      name: 'User',
      path: '/user/:address',
      component: UserView,
    },
    {
      name: 'CreateItem',
      path: '/item/create',
      component: CreateItemView,
    },
    {
      name: 'Login',
      path: '/Login',
      component: LoginView,
    },
  ],
});