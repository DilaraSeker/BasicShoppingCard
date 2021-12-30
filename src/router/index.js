import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '@/views/Shop'
import Cart from "@/views/Cart";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
