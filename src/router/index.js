import Vue from 'vue'
import VueRouter from 'vue-router'
import Ecommerce from '../views/Ecommerce.vue'
import Home from '../views/Home.vue'
import ItemDetail from '../views/ItemDetail.vue'
import Dialog from '../views/Dialog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ecommerce',
    name: 'ecommerce',
    component: Ecommerce
  },
  {
    path: '/itemdetail/:id',
    name: 'itemdetail',
    component: ItemDetail
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: Dialog
  },


]

const router = new VueRouter({
  routes
})

export default router
