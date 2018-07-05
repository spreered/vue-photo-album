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
import New from '@/components/New'
import Edit from '@/components/Edit'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/photo/new',
      name: 'New',
      component: New
    },
    {
      path: '/photo/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/photo/:id',
      name: 'Show',
      component: Show
    }
  ]
})