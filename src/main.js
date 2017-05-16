// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './assets/custom-theme/index.css'; // https://github.com/PanJiaChen/custom-element-theme
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './components/Icon-svg/index'
import './assets/iconfont/iconfont';
import './styles/index.scss';
import './mock/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)

function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true;
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login']; // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (store.getters.token) {
    if (to.path === '/login') {
      next({
        path: '/'
      });
    } else {
      if (to.meta && to.meta.role) {
        if (hasPermission(store.getters.roles, to.meta.role)) {
          next();
        } else {
          next('/401');
        }
      } else {
        next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

// 生产环境错误日志
if (process.env === 'production') {
  Vue.config.errorHandler = function (err, vm) {
    errLog.pushLog({
      err,
      url: window.location.href,
      vm
    })
  };
}

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
