import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index/index'
import Classify from 'pages/classify/index'
import Cart from 'pages/cart/index'
import Mine from 'pages/mine/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
