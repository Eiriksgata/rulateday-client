import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HOME = () => import('@/views/navar/Home.vue');

//exception views
const EXCEPTION_COMMIT = () => import('@/views/feedback/CommitViews.vue');

const EXCEPTION_LIST = () => import('@/views/feedback/StatisticsList.vue');

// error page components
const PAGE_403 = () => import('@/views/error/Page403.vue');
const PAGE_404 = () => import('@/views/error/Page404.vue');
const PAGE_500 = () => import('@/views/error/Page500.vue');



const routes = [

  // error pages
  { path: '/error/403', name: 'page403', component: PAGE_403 },
  { path: '/error/404', name: 'page404', component: PAGE_404 },
  { path: '/error/500', name: 'page500', component: PAGE_500 },

  //home
  { path: '/', name: 'Home', component: HOME },

  //
  { path: '/exception/commit', name: 'ExceptionCommit', component: EXCEPTION_COMMIT },
  { path: '/exception/list', name: 'ExceptionList', component: EXCEPTION_LIST },
  

]

const router = new VueRouter({
  routes
})

export default router
