import Vue from 'vue'
import Router from 'vue-router'
import ImgDisplay from '@/components/ImgDisplay'
import AuthPanel from '@/components/AuthPanel'
import ItemListElement from '@/components/ItemListElement'
import PhotoForm from '@/components/PhotoForm'
import Index from '@/components/Index'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Show from '@/components/Show'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Show',
      component: Show
    }
  ]
})