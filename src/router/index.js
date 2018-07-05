import Vue from 'vue'
import Router from 'vue-router'
import ImgContainer from '@/components/ImgContainer'
import AuthPanel from '@/components/AuthPanel'
import ItemListElement from '@/components/ItemListElement'
import PhotoForm from '@/components/PhotoForm'
import Index from '@/components/Index'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})