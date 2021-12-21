import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/Basket.vue'
import Product from '../views/Product.vue';
import Login from '../views/Login.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
