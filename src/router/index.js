import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout/Layout';

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/login',
      component: resolve => require(['../views/account/login'], resolve),
      hidden: true
    },
    {
      path: '/404',
      component: resolve => require(['../views/error/404'], resolve),
      hidden: true
    },
    {
      path: '/401',
      component: resolve => require(['../views/error/401'], resolve),
      hidden: true
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      name: '首页',
      hidden: true,
      children: [{
        path: 'dashboard',
        component: resolve => require(['../views/dashboard/index'], resolve)
      }]
    },
    {
      path: '*',
      redirect: '/404',
      hidden: true
    }
  ]
})
