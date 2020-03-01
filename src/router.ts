import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './views/HomeView.vue';
import MHWView from './views/MHWView.vue';
import TwitchView from './views/TwitchView.vue';


Vue.use(Router);

export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: true,
    },
    {
      path: '/mhw_builder',
      name: 'MHW Builder',
      component: MHWView,
      props: true,
    },
    {
      path: '/twitch_stats',
      name: 'Twitch Stats',
      component: TwitchView,
      props: true,
    }
  ]
})
