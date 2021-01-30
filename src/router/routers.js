import VueRouter from 'vue-router'

import qrPage from '../pages/qrPage'
import box from '../pages/box.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: qrPage
    },
    {
      path: '/box',
      component: box
    }
  ]
})
