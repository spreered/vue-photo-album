import Vue from 'vue'
import Router from 'vue-router'
import ImgContainer from '@/components/ImgContainer'
import AuthPanel from '@/components/AuthPanel'
import ItemListElement from '@/components/ItemListElement'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ItemListElement',
      component: ItemListElement
    }
  ]
})