import Vue from 'vue'
import Router from 'vue-router'
import ImgContainer from '@/components/ImgContainer'
import AuthPanel from '@/components/AuthPanel'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AuthPanel',
      component: AuthPanel
    }
  ]
})